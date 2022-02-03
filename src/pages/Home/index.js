import React from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from '../../components/Footer';
import Projects from '../../components/Projects';

import styles from './Home.module.scss';

export const Home = () => {
    return (
        <Container fluid className={styles.Container}>
            <div className={styles.Main} >
                <Projects />
            </div>
            <Footer />
        </Container>
    )
}