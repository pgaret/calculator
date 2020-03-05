import React, { useState, createContext } from 'react';
import Display from './components/Display';
import styles from './App.module.css';
import ButtonPanel from './components/ButtonPanel';

export interface ContextStructure {
  currentValue: number,
  nextOperation: string,
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
      case 'C':
        return 0;
    }
    return currentValue;
  }

  function typeNumber(num: number) {
    setCurrentValue(Number(`${currentValue}${num}`))
  }

  function setOperation(operation: string) {
    // if (nextOperation) {
    //   setCurrentValue(runOperation(num, nextOperation));
    //   setNextOperation('');
    // }
    setNextOperation(operation);
  }

  function evaluateCalculator() {
    // Do thing
  }

  function resetCalculator() {
    setNextOperation('');
    setCurrentValue(0);
  }

  const functionMap = {
    number: typeNumber,
    function: setOperation,
    reset: resetCalculator,
    evalulate: evaluateCalculator
  }

  return (
    <CalculatorContext.Provider
      value={{
        currentValue: currentValue,
        nextOperation: nextOperation,
        functionMap: functionMap
      }}
    >
      <div className={styles.container}>
        <div className={styles.calculator}>
          <Display />
          <ButtonPanel />
        </div>
      </div>
    </CalculatorContext.Provider>
  );
}

export default App;
