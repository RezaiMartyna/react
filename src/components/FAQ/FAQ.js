import React from 'react';
import Container from '../Container/Container';
import Hero from './../Hero/Hero';
import { FAQData} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';


const FAQ = () => (
  <Container>
    <Hero titleText={FAQData.title} imgSrc={FAQData.image}></Hero>
    <div>
      {ReactHtmlParser(FAQData.description)}
    </div>
  </Container>
);


export default FAQ;