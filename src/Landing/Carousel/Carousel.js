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
  let x = 0;
  let index = 0;

  var disabledCarousel = ({
    'transform': 'scale(0.8)'
  })
  var enabledCarousel = ({
    'transform': 'scale(1)'
  })

  let changeCarousel = disabledCarousel
  if (carouselData[0].active === true) {
    changeCarousel = enabledCarousel
  }
  function onNext() {
    index = index + 1;

    if (index > 4) {
      index = 0;
    }
    if (x < -300) {
      x = 0;
      document.querySelector(".round-carousel").style.transform =
        "translate(" + x + "%,0)";
    } else {
      x = x - 100;
      document.querySelector(".round-carousel").style.transform =
        "translate(" + x + "%,0)";
      for (var i = 0; i <= 4; i++) {
        if (carouselData[i].classId === index) {
          changeCarousel = enabledCarousel
        } else {
          changeCarousel = disabledCarousel
        }
      }
    }
  }

  return (
    <>
      <BaseCarousel>
        <Container className="round-carousel">
          {
            carouselData.map((carousels) => {
              return (
                <CarouselImage style={changeCarousel}>
                  <img src={carousels.imgCarousel} alt="" />
                </CarouselImage>)
            })
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
