import { useState, useEffect } from 'react';
import Carousel from "./Carousel";
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';
import geogame from '../../assets/geogame.png';
import portfolio95 from '../../assets/portfolio95.png';
import moodup from '../../assets/moodup.png';
import tasaweb from '../../assets/tasaweb.png';

const Works = () => {

  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen={portfolio95} title={'Portfolio 95'} description={'A Windows 95 style portfolio'} link={'https://portfolio95.aramendi.dev/'} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={geogame} title={'Geogame'} description={'A React game about guessing flags and capitals'} link={'https://geogame.aramendi.dev/'} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={moodup} title={'moodup'} link={'https://moodup.aramendi.dev/'} description={
          <>
            A web app that allows employees to vote their mood at check in and check out as well as the ability to establish an anonymous channel with HR.<br/><br/>
            For information about credentials to test, check  &nbsp;
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">my github</a>.
          </>} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={tasaweb} title={'TasaWeb'} description={'The result of a one-day hackathon. This app evaluates the price of a house by comparing it with data scraped from Spain\'s largest real estate portal.'} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      )
    }
  ];


  return (
    <div className="works-carousel">
      <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  )
}


export default Works;