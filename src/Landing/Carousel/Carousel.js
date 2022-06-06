import React from 'react'
import { Container } from '../../Components/Global/Components'
import { BaseCarousel, CarouselImage } from './CarouselComponents'
import { carouselData } from './Data/CarouselData'

import './carouselStyle.css'

export function Carousel() {

    return (<>
        <BaseCarousel>
            <Container className='carousel'>
                {
                    <>
                        <CarouselImage className='current-position'>
                            <img src={carouselData[0].img} alt="" />
                        </CarouselImage>
                        <CarouselImage className='next-position'>
                            <img src={carouselData[1].img} alt="" />
                        </CarouselImage>
                    </>
                }
            </Container>
        </BaseCarousel>
    </>)
}