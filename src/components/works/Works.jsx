import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import geogame from '../../assets/geogame.png';
import portfolio95 from '../../assets/portfolio952.png';
import moodup from '../../assets/moodup.png';
import tasaweb from '../../assets/tasaweb.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import './works.css'

const Works = () => {
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <h2>My side projects</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={1.2}
        centeredSlides={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="swiper-img-wrapper">
            <img src={portfolio95} alt="Placeholder" />
            <div className="visit-button">
              <a href="https://portfolio95.aramendi.dev/" target="_blank">
                <div className="button">
                  <span className="button__mask"></span>
                  <span className="button__text">Check it out</span>
                  <span className="button__text button__text--bis">Check it out</span>
                </div>
              </a>
            </div>
          </div>
          <p>A Windows 95 styled portfolio built with React</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-img-wrapper">
            <img src={geogame} alt="Placeholder" />
            <div className="visit-button">
              <a href="https://geogame.aramendi.dev/" target="_blank">
                <div className="button">
                  <span className="button__mask"></span>
                  <span className="button__text">Check it out</span>
                  <span className="button__text button__text--bis">Check it out</span>
                </div>
              </a>
            </div>
          </div>
          <p>Geography game using the RestCountries API. Play <i>Guess the flag</i>, <i>Guess the capital</i> or <i>learn about each country in the world</i></p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-img-wrapper">
            <img src={moodup} alt="Placeholder" />
            <div className="visit-button">
              <a href="https://moodup.aramendi.dev/admin" target="_blank">
                <div className="button">
                  <span className="button__mask"></span>
                  <span className="button__text">Check it out</span>
                  <span className="button__text button__text--bis">Check it out</span>
                </div>
              </a>
            </div>
          </div>
          <p>A mood tracker webapp built in React and NodeJS. It records employees' moods and allows them to communicate with HR. <br /><br /> HR can view graphics to observe the evolution of employees' moods. They can also respond to employees' messages.</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-img-wrapper">
            <img src={tasaweb} alt="Placeholder" />
            <div className="visit-button">
              <a href="https://tasaweb.aramendi.dev/" target="_blank">
                <div className="button">
                  <span className="button__mask"></span>
                  <span className="button__text">Check it out</span>
                  <span className="button__text button__text--bis">Check it out</span>
                </div>
              </a>
            </div>
          </div>
          <p>This web app calculates the price of a house based on parameters such as square meters, rooms, bathrooms... It uses a predictive model built in Python using over 1 million house listings scraped from Spain's largest real estate portal.</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default Works;