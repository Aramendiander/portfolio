import { useState, useEffect } from 'react';
import geogame from '../../assets/geogame.png';


const Geogame = () => {




    return (
        <div className="work geogame">
            <h3>Geogame</h3>
            <div className="halfwrapper">
                <div className="half">
                    <img src={geogame} alt="" />
                </div>
                <div className="half">
                    <p>Simple website with Geography games and useful data for every country in the world using the Rest Countries API</p>
                    <a href="https://geogame.aramendi.dev" target="_blank">
                        <div className="button">
                            <span className="button__mask"></span>
                            <span className="button__text">Check it out</span>
                            <span className="button__text button__text--bis">Check it out</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Geogame;