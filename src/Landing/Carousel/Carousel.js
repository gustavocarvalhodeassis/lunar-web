import React, { useState } from "react";
import { carouselData } from "./Data/CarouselData";
import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg'
import "./carouselStyle.css";
import { Button } from "../../Components/Buttons/ButtonComponents";
import { Container } from "../../Components/Global/Components";
export function Carousel({ slides }) {

  const [current, setCurrent] = useState(0)
  const length = slides.length

  const slideNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const slidePrev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <>
      <Container>
        <section className="slider">
          {
            carouselData.map((item, index) => {
              return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                  {
                    index === current && (<img src={item.carouselImg} alt='imagens do sistema' className="image" />)
                  }

                </div>

              )
            })
          }
        </section>
        <div className="carousel-actions">
          <Button onClick={slidePrev}><CgArrowLongLeft /></Button>
          <div className="carousel-counters">{
            carouselData.map((i, index) => {
              return (
                <div className={index === current ? 'counter active' : 'counter'} key={index}></div>
              )
            })
          }</div>
          <Button onClick={slideNext}><CgArrowLongRight /></Button>
        </div>
      </Container>
    </>
  );
}
