import { useState, useEffect } from 'react';
import Carousel from "./Carousel";
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';
import geogame from '../../assets/geogame.png';
import portfolio95 from '../../assets/portfolio95.png';

const Works = () => {

    let cards = [
        {
          key: uuidv4(),
          content: (
            <Card imagen={portfolio95} title={'Portfolio 95'} description={'A Windows 95 style portfolio'} />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen={geogame} title={'Geogame'} description={'A React game about guessing flags and capitals'}  />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
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