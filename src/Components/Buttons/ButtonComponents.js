import styled from "styled-components";

export const Button = styled.button`
    border: none;
    font-family: 'Poppins';
    border-radius: 7px;
    padding: 12px 25px;
    font-size: 1rem;
    text-transform: capitalize;
    font-weight: bold;
    cursor: pointer;
    background-color: #7A3FF3;
    color: white;
    transition: all 0.25s ease-in-out;
    outline: #7b3ff33a 0px solid;

    &:hover{
        transition: all 0.25s ease-in-out;
        outline: #7b3ff33a 7px solid;
    }

    &:active{
        transition: all 0.25s ease-in-out;
        background-color: #5d2cbe;
        outline: #7b3ff33a 5px solid;
    }
`

