import React, { useState, createContext } from 'react';
import Display from './components/Display';
import styles from './App.module.css';
import ButtonPanel from './components/ButtonPanel';

export interface ContextStructure {
  currentValue: number,
  functionMap: {
    [key: string]: Function
  }
}

export const CalculatorContext = createContext<Partial<ContextStructure>>({});;

function App() {
  const [ currentValue, setCurrentValue ] = useState(0);
  const [ nextOperation, setNextOperation ] = useState('');

  function runOperation(value: number, operation: string) {
    console.log(value, operation);
    switch (operation) {
      case '+':
        return value + currentValue;
      case '-':
        return value - currentValue;    
      case 'x':
        return value * currentValue;
      case '%':
        return value / currentValue;
    }
    return currentValue;
  }

  function typeNumber(num: number) {
    if (nextOperation) {
      setCurrentValue(runOperation(num, nextOperation));
      setNextOperation('');
    } else {
      setCurrentValue(Number(`${currentValue}${num}`))
    }
  }

  function setOperation(operation: string) {
    setNextOperation(operation);
  }

  const functionMap = {
    number: typeNumber,
    function: setOperation
  }

  return (
    <CalculatorContext.Provider
      value={{
        currentValue: currentValue,
        functionMap: functionMap
      }}
    >
    <div className={styles.container}>
      <Display />
      <ButtonPanel />
    </div>
    </CalculatorContext.Provider>
  );
}

export default App;
