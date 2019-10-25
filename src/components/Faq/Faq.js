import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqPage} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

const Faq = () => (
  <Container>
    <Hero titleText={faqPage.title} imageLink={faqPage.img} />
    {ReactHtmlParser(faqPage.content)}
  </Container>
);

export default Faq;
