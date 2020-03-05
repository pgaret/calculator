import React, { useContext } from 'react';
import classnames from 'classnames';
import { CalculatorContext,  } from '../../App';
import styles from './Button.module.css';

interface Props {
      type: string,
      value: string | number
}

function ButtonPanel({ type, value }: Props) {
      const { functionMap, nextOperation } = useContext(CalculatorContext);

      const buttonClasses = classnames(styles.button, {
            [styles.function]: type === 'function',
            [styles.active]: type === 'function' && value === nextOperation
      });

      function handleClick() {
            if ((functionMap || {})[type]) {
                  (functionMap || {})[type](value);
            }
      }

      return (
            <div className={buttonClasses} onClick={handleClick}>{value}</div>
      );
}

export default ButtonPanel;