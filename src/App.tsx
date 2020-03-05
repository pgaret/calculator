import React, { useState, createContext } from 'react';
import Display from './components/Display';
import styles from './App.module.css';
import ButtonPanel from './components/ButtonPanel';

export interface ContextStructure {
  currentValue: number,
  tempValue: number | null,
  nextOperation: string,
  functionMap: {
    [key: string]: Function
  }
}

interface TempValue {
  tempValue: number
}

export const CalculatorContext = createContext<Partial<ContextStructure>>({});;

function App() {
  const [ currentValue, setCurrentValue ] = useState<number>(0);
  const [ tempValue, setTempValue ] = useState<number | null>(null);
  const [ nextOperation, setNextOperation ] = useState<string>('');

  function runOperation(value: number, operation: string) {
    console.log(currentValue, operation, value);
    switch (operation) {
      case '+':
        return currentValue + value;
      case '-':
        return currentValue - value;    
      case 'x':
        return currentValue * value;
      case '%':
        return currentValue / value;
      case 'C':
        return 0;
    }
    return currentValue;
  }

  function combineNumbers(num1: number, num2: number) {
    return Number(`${num1}${num2}`);
  }

  function typeNumber(num: number) {
    console.log(num);
    if (nextOperation) {
      setTempValue(tempValue ? num : combineNumbers(Number(tempValue), num));
    } else {
      setCurrentValue(combineNumbers(currentValue, num));
    }
  }

  function setOperation(operation: string) {
    if (nextOperation) {
      setCurrentValue(runOperation(Number(tempValue), nextOperation));
      setTempValue(null);
      setNextOperation(operation);
    } else {
      setNextOperation(operation);
    }
  }

  function evaluateCalculator() {
    if (nextOperation) {
      setCurrentValue(runOperation(Number(tempValue), nextOperation));
      setTempValue(null);
      setNextOperation('');
    }
  }

  function resetCalculator() {
    setNextOperation('');
    setCurrentValue(0);
  }

  const functionMap = {
    number: typeNumber,
    function: setOperation,
    reset: resetCalculator,
    eval: evaluateCalculator
  }

  return (
    <CalculatorContext.Provider
      value={{
        currentValue: currentValue,
        tempValue: tempValue,
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
