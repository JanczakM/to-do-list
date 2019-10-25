import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoPage} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';


const Info = () => (
  <Container>
    <Hero titleText={infoPage.title} imageLink={infoPage.img} />
    {ReactHtmlParser(infoPage.content)}
  </Container>
);

export default Info;
