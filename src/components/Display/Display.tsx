import React, { useContext } from 'react';
import { CalculatorContext } from '../../App';
import styles from './Display.module.css';

function Display() {
    const { currentValue, tempValue } = useContext(CalculatorContext);
    return (
        <div className={styles.display}>{tempValue || currentValue}</div>
    );
}

export default Display;