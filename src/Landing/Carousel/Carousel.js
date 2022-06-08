import React from "react";
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
  let i = 0;
  let x = 0;
  let gotIndex = 0;
  let carouselIndex;

  function onNext() {
    gotIndex = gotIndex + 1;
    if (gotIndex > 4) {
      gotIndex = 0;
    }
    console.log("gotIndex = " + gotIndex);
    if (x < -300) {
      x = 0;
      document.querySelector(".round-carousel").style.transform =
        "translate(" + x + "%,0)";
    } else {
      x = x - 100;
      document.querySelector(".round-carousel").style.transform =
        "translate(" + x + "%,0)";
      
    }
    for (i; i < carouselData.length; i++) {
      carouselIndex = carouselData[i].classId;
      console.log("carrocel " + carouselIndex + " Index " + gotIndex);
    }
  }

  return (
    <>
      <BaseCarousel>
        <Container className="round-carousel">
          {
            <>
              {carouselData.map((i) => {
                return (
                  <CarouselImage
                    className={
                      carouselIndex === gotIndex
                        ? "enabled-carousel "
                        : "disabled-carousel"
                    }
                    setIndex={i.index}
                  >
                    <img src={i.imgCarousel} alt="" />
                  </CarouselImage>
                );
              })}
            </>
          }
        </Container>
        <Container className="carousel-button">
          <CarouselCounter>
            {carouselData.map((i) => {
              return <div className="counter1"></div>;
            })}
          </CarouselCounter>
          <Button
            onClick={() => {
              onNext();
            }}
          >
            Proximo
          </Button>
        </Container>
      </BaseCarousel>
    </>
  );
}
