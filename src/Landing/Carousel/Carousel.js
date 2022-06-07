import React, { useState } from "react";
import { Container } from "../../Components/Global/Components";
import {
  BaseCarousel,
  CarouselImage,
  CarouselCounter,
} from "./CarouselComponents";
import { carouselData } from "./Data/CarouselData";

import "./carouselStyle.css";
import { Button } from "../../Components/Buttons/ButtonComponents";

export function Carousel() {

  const changeCarousel = useState(0)
  let x = 0
  var scale = ({
    'transform': 'scale(0.1)'
 });
  function onNext() {
    x = x - 100
    document.querySelector(".round-carousel").style.transform = "translate("+x+"%,0)"
    if(x == -400){
      x = x + 500
    } 
    console.log(x)
  } 

  return (
    <>
      <BaseCarousel>
        <Container className="round-carousel">
          {
            <>
              <CarouselImage style={scale}>
                <img src={carouselData[0].imgCarousel} alt="" />
              </CarouselImage>
              <CarouselImage style={scale}>
                <img src={carouselData[1].imgCarousel} alt="" />
              </CarouselImage>
              <CarouselImage style={scale}>
                <img src={carouselData[2].imgCarousel} alt="" />
              </CarouselImage>
              <CarouselImage style={scale}>
                <img src={carouselData[3].imgCarousel} alt="" />
              </CarouselImage>
              <CarouselImage style={scale}>
                <img src={carouselData[4].imgCarousel} alt="" />
              </CarouselImage>
            </>
          }
        </Container>
        <Container className="carousel-button">
          <CarouselCounter>
            <div className="counter1"></div>
            <div className="counter2"></div>
            <div className="counter3"></div>
            <div className="counter4"></div>
            <div className="counter5"></div>
            <div className="counter6"></div>
          </CarouselCounter>
          <Button
            onClick={() => {
              onNext()
            }}
          >
            Proximo
          </Button>
        </Container>
      </BaseCarousel>
    </>
  );
}
