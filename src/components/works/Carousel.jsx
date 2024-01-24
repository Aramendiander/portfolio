import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";

export default function Carroussel(props) {
    const table = props.cards.map((element, index) => {
      return { ...element, onClick: () => setGoToSlide(index) };
    });
  
    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrows] = useState(false);
    const [goToSlide, setGoToSlide] = useState(null);
    const [cards] = useState(table);
  
    useEffect(() => {
      setOffsetRadius(props.offset);
      setShowArrows(props.showArrows);
    }, [props.offset, props.showArrows]);
  
    const offsetFn = (offsetFromCenter, index) => {
      if (index === 4) {
        return {
          transform: 'translateY(-50%) translateX(-30.6667%) scale(0.333333)',
        };
      }
      if (index === 0) {
        return {
          transform: 'translateY(-50%) translateX(-70.6667%) scale(0.333333)',
        };
      }
      return null;
    };
  
    return (
      <div
        style={{ width: props.width, height: props.height, margin: props.margin }}
      >
        <Carousel
          slides={cards}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showArrows}
          animationConfig={config.gentle}
          offsetFn={offsetFn}
        />
      </div>
    );
  }
