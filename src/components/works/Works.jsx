import { useState, useEffect } from 'react';
import Geogame from './Geogame';
import Vegolution from './Vegolution';
import Pokeweb from './Pokeweb';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Works = () => {




    return (
        <div className="works">
            <h2>My Works</h2>
            <div className="works-container">
                <Carousel>
                    <Geogame />
                    <Vegolution />
                    <Pokeweb />
                </Carousel>
            </div>
        </div>
    )
}


export default Works;