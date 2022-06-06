import React from 'react'
import { Container } from '../../Components/Global/Components'
import { BaseCarousel, CarouselImage, CarouselButton } from './CarouselComponents'
import { carouselData } from './Data/CarouselData'

import './carouselStyle.css'
import {CgArrowRightO} from 'react-icons/cg'

export function Carousel() {
    var x = -100
    var [scaleDisabled, scaleEnebled] = [0.8, 1]
    function increaseX() {
         x = x-100
    }
    function roundCarousel() {
        document.querySelector(".position0").style.transform = "translate("+x+"%, 0) scale("+scaleEnebled+")"
        if(x === -100){
            document.querySelector(".position0").style.transform = "translate("+x+"%, 0) scale("+scaleDisabled+")"
            document.querySelector(".position1").style.transform = "translate("+x+"%, 0) scale("+scaleEnebled+")"
            document.querySelector(".position2").style.transform = "translate("+x+"%, 0) scale("+scaleDisabled+")"
            document.querySelector(".position3").style.transform = "translate("+x+"%, 0) scale("+scaleDisabled+")"
            document.querySelector(".position4").style.transform = "translate("+x+"%, 0) scale("+scaleEnebled+")"
        }
        else if(x === -200){
            document.querySelector(".position0").style.transform = "translate("+x+"%, 0) scale("+scaleEnebled+")"
            document.querySelector(".position1").style.transform = "translate("+x+"%, 0) scale("+scaleDisabled+")"
            document.querySelector(".position2").style.transform = "translate("+x+"%, 0) scale("+scaleEnebled+")"
            document.querySelector(".position3").style.transform = "translate("+x+"%, 0) scale("+scaleDisabled+")"
            document.querySelector(".position4").style.transform = "translate("+x+"%, 0) scale("+scaleDisabled+")"
        }
        else if(x === -300){
            document.querySelector(".position0").style.transform = "translate("+x+"%, 0) scale("+scaleDisabled+")"
            document.querySelector(".position1").style.transform = "translate("+x+"%, 0) scale("+scaleDisabled+")"
            document.querySelector(".position2").style.transform = "translate("+x+"%, 0) scale("+scaleDisabled+")"
            document.querySelector(".position3").style.transform = "translate("+x+"%, 0) scale("+scaleEnebled+")"
            document.querySelector(".position4").style.transform = "translate("+x+"%, 0) scale("+scaleDisabled+")"
        }
        else if(x === -400){
            document.querySelector(".position0").style.transform = "translate("+x+"%, 0) scale("+scaleDisabled+")"
            document.querySelector(".position1").style.transform = "translate("+x+"%, 0) scale("+scaleDisabled+")"
            document.querySelector(".position2").style.transform = "translate("+x+"%, 0) scale("+scaleDisabled+")"
            document.querySelector(".position3").style.transform = "translate("+x+"%, 0) scale("+scaleDisabled+")"
            document.querySelector(".position4").style.transform = "translate("+x+"%, 0) scale("+scaleEnebled+")"
        } else {
            document.querySelector(".position0").style.transform = "translate(0%, 0) scale("+scaleEnebled+")"
            document.querySelector(".position1").style.transform = "translate(0%, 0) scale("+scaleDisabled+")"
            document.querySelector(".position2").style.transform = "translate(0%, 0) scale("+scaleDisabled+")"
            document.querySelector(".position3").style.transform = "translate(0%, 0) scale("+scaleDisabled+")"
            document.querySelector(".position4").style.transform = "translate(0%, 0) scale("+scaleDisabled+")"
            console.log(x)
            x = 0
        }
        console.log(x)
    }

    return (<>
        <BaseCarousel>
            <Container className='carousel'>
                {
                    <>
                        <CarouselImage className='position0'>
                            <img src={carouselData[0].imgCarousel} alt='' />
                        </CarouselImage>
                        <CarouselImage className='position1'>
                            <img src={carouselData[1].imgCarousel} alt='' />
                        </CarouselImage>
                        <CarouselImage className='position2'>
                            <img src={carouselData[2].imgCarousel} alt='' />
                        </CarouselImage>
                        <CarouselImage className='position3'>
                            <img src={carouselData[3].imgCarousel} alt='' />
                        </CarouselImage>
                        <CarouselImage className='position4'>
                            <img src={carouselData[4].imgCarousel} alt='' />
                        </CarouselImage>
                        
                    </>
                }
            </Container>
            <Container className='carousel-button'>
                <CarouselButton onClick={() => {roundCarousel(); increaseX()}}>
                    Proximo <CgArrowRightO size={50}/>
                </CarouselButton>
            </Container>
        </BaseCarousel>
    </>)
}