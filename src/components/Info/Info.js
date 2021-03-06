import React from 'react';
import Container from '../Container/Container';
import Hero from './../Hero/Hero';
import { InfoData} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

const Info = () => (
  <Container>
    <Hero titleText={InfoData.title} imgSrc={InfoData.image}></Hero>
    <div>
      {ReactHtmlParser(InfoData.description)}
    </div>
  </Container>
);


export default Info;