import React from 'react';

import Hero from '../components/Hero/Hero';
import { Heading } from '../components/Heading/Heading';

import bgHighway from './assets/bg-highway.jpg';
import bgCar from './assets/bg-car.jpg';

export default {
    title: 'Hero',
    component: Hero
};

export const usage = () => (
    <Hero image={bgHighway} >
        <Heading>
            <h1>Ganhe sua <strong>liberdade</strong> <br /> para ir e vir</h1>
        </Heading>
        <p>A auto escola lider em aprovação.</p>
    </Hero>
);

export const withList = () => (
    <Hero image={bgCar} >
        <Heading>
            <h1>Ganhe sua <strong>liberdade</strong> <br /> para ir e vir</h1>
        </Heading>
        <ul>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
        </ul>
    </Hero>
);