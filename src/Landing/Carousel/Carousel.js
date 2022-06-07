import React from "react";
import { Container } from "../../Components/Global/Components";
import {
  BaseCarousel,
  CarouselImage,
  CarouselCounter,
} from "./CarouselComponents";
import { carouselData } from "./Data/CarouselData";

import "./carouselStyle.css";
import { FiArrowRightCircle } from "react-icons/fi";
import { Button } from "../../Components/Buttons/ButtonComponents";

export function Carousel() {
  var x = -100;
  var [scaleDisabled, scaleEnebled] = [0.8, 1];
  function increaseX() {
    x = x - 100;
  }
  function roundCarousel() {
    document.querySelector(".position0").style.transform =
      "translate(" + x + "%, 0) scale(" + scaleEnebled + ")";
    if (x === -100) {
      document.querySelector(".position0").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".position1").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleEnebled + ")";
      document.querySelector(".position2").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".position3").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".position4").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".counter2").style.transform = "scale(1.5)";
      document.querySelector(".counter2").style.backgroundColor =
        "rgba(255, 255, 255, 1)";
      document.querySelector(".counter1").style.transform = "scale(1)";
      document.querySelector(".counter1").style.backgroundColor =
        "rgba(255, 255, 255, 0.3)";
    } else if (x === -200) {
      document.querySelector(".position0").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".position1").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".position2").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleEnebled + ")";
      document.querySelector(".position3").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".position4").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".counter3").style.transform = "scale(1.5)";
      document.querySelector(".counter3").style.backgroundColor =
        "rgba(255, 255, 255, 1)";
      document.querySelector(".counter2").style.transform = "scale(1)";
      document.querySelector(".counter2").style.backgroundColor =
        "rgba(255, 255, 255, 0.3)";
    } else if (x === -300) {
      document.querySelector(".position0").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".position1").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".position2").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".position3").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleEnebled + ")";
      document.querySelector(".position4").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".counter4").style.transform = "scale(1.5)";
      document.querySelector(".counter4").style.backgroundColor =
        "rgba(255, 255, 255, 1)";
      document.querySelector(".counter3").style.transform = "scale(1)";
      document.querySelector(".counter3").style.backgroundColor =
        "rgba(255, 255, 255, 0.3)";
    } else if (x === -400) {
      document.querySelector(".position0").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".position1").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".position2").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".position3").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".position4").style.transform =
        "translate(" + x + "%, 0) scale(" + scaleEnebled + ")";
      document.querySelector(".counter5").style.transform = "scale(1.5)";
      document.querySelector(".counter5").style.backgroundColor =
        "rgba(255, 255, 255, 1)";
      document.querySelector(".counter4").style.transform = "scale(1)";
      document.querySelector(".counter4").style.backgroundColor =
        "rgba(255, 255, 255, 0.3)";
    } else {
      document.querySelector(".position0").style.transform =
        "translate(0%, 0) scale(" + scaleEnebled + ")";
      document.querySelector(".position1").style.transform =
        "translate(0%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".position2").style.transform =
        "translate(0%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".position3").style.transform =
        "translate(0%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".position4").style.transform =
        "translate(0%, 0) scale(" + scaleDisabled + ")";
      document.querySelector(".counter1").style.transform = "scale(1.5)";
      document.querySelector(".counter1").style.backgroundColor =
        "rgba(255, 255, 255, 1)";
      document.querySelector(".counter5").style.transform = "scale(1)";
      document.querySelector(".counter5").style.backgroundColor =
        "rgba(255, 255, 255, 0.3)";
      x = 0;
    }
    console.log(x);
  }

  return (
    <>
      <BaseCarousel>
        <Container className="carousel">
          {
            <>
              <CarouselImage className="position0">
                <img src={carouselData[0].imgCarousel} alt="" />
              </CarouselImage>
              <CarouselImage className="position1">
                <img src={carouselData[1].imgCarousel} alt="" />
              </CarouselImage>
              <CarouselImage className="position2">
                <img src={carouselData[2].imgCarousel} alt="" />
              </CarouselImage>
              <CarouselImage className="position3">
                <img src={carouselData[3].imgCarousel} alt="" />
              </CarouselImage>
              <CarouselImage className="position4">
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
              roundCarousel();
              increaseX();
            }}
          >
            Proximo
          </Button>
        </Container>
      </BaseCarousel>
    </>
  );
}
