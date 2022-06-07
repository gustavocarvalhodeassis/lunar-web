import styled from 'styled-components'

export const BaseCarousel = styled.section`
    align-items: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 120px;
`
export const CarouselImage = styled.div`
    
`
export const CarouselButton = styled.button`
    align-items: center;
    font-family: 'Poppins';
    background-color: transparent;
    gap: 20px;
    border: none;
    outline: none;
    display: flex;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    align-self: flex-end;
`
export const CarouselCounter = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`