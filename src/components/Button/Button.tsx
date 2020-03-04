import React, { useContext } from 'react';
import { CalculatorContext,  } from '../../App';
import styles from './Button.module.css';

interface Props {
      type: string,
      value: string | number
}

function ButtonPanel({ type, value }: Props) {
      const { functionMap } = useContext(CalculatorContext);

      function handleClick() {
            if ((functionMap || {})[type]) {
                  (functionMap || {})[type](value);
            }
      }
      return (
            <button className={styles.button} onClick={handleClick}>{value}</button>
      );
}

export default ButtonPanel;