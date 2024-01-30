import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Button from "./Button";

function Card({ imagen, title, description, link }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2>{title}</h2>
      <p>
        {description} 
      </p>
      <div className={Styles.btnn}>
      <a href={link} target="_blank">
                        <div className="button">
                            <span className="button__mask"></span>
                            <span className="button__text">Check it out</span>
                            <span className="button__text button__text--bis">Check it out</span>
                        </div>
                    </a>

      </div>
    </animated.div>
  );
}

export default Card;
