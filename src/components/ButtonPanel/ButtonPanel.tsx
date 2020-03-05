import React from 'react';
import Button from '../Button';
import { Grid, Row, Column } from '../Grid';
import styles from './ButtonPanel.module.css';

function ButtonPanel() {
        return (
                <section className={styles.container}>
                        <Grid>
                                <Column>
                                        <Row>
                                                <>
                                                        <Button type='number' value={7} />
                                                        <Button type='number' value={8} />
                                                        <Button type='number' value={9} />
                                                </>
                                        </Row>
                                        <Row>
                                                <>
                                                        <Button type='number' value={4} />
                                                        <Button type='number' value={5} />
                                                        <Button type='number' value={6} />
                                                </>
                                        </Row>
                                        <Row>
                                                <>
                                                        <Button type='number' value={1} />
                                                        <Button type='number' value={2} />
                                                        <Button type='number' value={3} />
                                                </>
                                        </Row>
                                        <Row>
                                                <>
                                                        <Button type='number' value={0} />
                                                        <Button type='reset' value='C' />
                                                        <Button type='eval' value="=" />
                                                </>
                                        </Row>
                                </Column>
                                <Column>
                                        <Button type='function' value="+" />
                                        <Button type='function' value="-" />
                                        <Button type='function' value="x" />
                                        <Button type='function' value="%" />
                                </Column>
                        </Grid>
                </section>
    );
}

export default ButtonPanel;