import styled from 'styled-components'
import FullImg from '../assets/2.png'

export const HomeSection = styled.section`
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 2.5rem;
    @media screen and (max-width: 860px){
        text-align: center;
    }
`
export const Paragraph = styled.p`
    font-size: 1.1rem;
    @media screen and (max-width: 860px){
        text-align: center;
    }
`
export const FullWidthImg = styled.div`
    background-image: url(${FullImg});
    background-size: cover;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 100%;
    margin-top: 120px;

    @media screen and (max-width: 860px) {
        align-items: center;
        justify-content: center;
    }
`
export const Flex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 860px){
        flex-direction: column;
    }
`
export const BackgroudDark = styled.section`
    background-color: #393E45;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`
export const AboutCard = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: fit-content;
    padding: 30px 30px;
    border-radius: 20px;
    transition: all 0.25s;

    &:hover{
        transform: scale(1.1);
        background-color: #4C5057;
    }
`