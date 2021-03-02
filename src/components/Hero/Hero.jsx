import React from 'react';
import PropTypes from 'prop-types';

import { Root, Container, Title, Content } from './styles';

const Hero = ({ image, children }) => (
    <React.Fragment>
        <Root image={image}>
            <Container>
                <Content>{children}</Content>
            </Container>
        </Root>
    </React.Fragment>

);

Hero.propTypes = {
    image: PropTypes.string,
    children: PropTypes.node
};


export default Hero;
