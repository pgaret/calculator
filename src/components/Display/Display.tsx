import React, { useContext } from 'react';
import { CalculatorContext } from '../../App';
import styles from './Display.module.css';

function Display() {
    const { currentValue } = useContext(CalculatorContext);
    return (
        <div className={styles.display}>{currentValue}</div>
    );
}

export default Display;