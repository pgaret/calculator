import React from 'react';
import Button from '../Button';
import styles from './ButtonPanel.module.css';

function ButtonPanel() {
        return (
                <section className={styles.container}>
                        <div>
                                <Button type='number' value={0} />
                                <Button type='number' value={1} />
                                <Button type='number' value={2} />
                                <Button type='number' value={3} />
                                <Button type='number' value={4} />
                                <Button type='number' value={5} />
                                <Button type='number' value={6} />
                                <Button type='number' value={7} />
                                <Button type='number' value={8} />
                                <Button type='number' value={9} />
                        </div>
                        <div>
                                <Button type='function' value="+" />
                                <Button type='function' value="-" />
                                <Button type='function' value="x" />
                                <Button type='function' value="%" />
                        </div>
                </section>
    );
}

export default ButtonPanel;