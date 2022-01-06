import React from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from '../../components/Footer';
import Projects from '../../components/Projects';

export const Home = () => {
    return (
        <Container fluid>
            <Projects />
            <Footer />
        </Container>
    )
}