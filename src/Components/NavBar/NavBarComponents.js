import styled from "styled-components";

const linkTextSize = "1.25rem";

export const Header = styled.header`
    padding: 30px 0px;
    align-items: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
`

export const NavBarContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /*@media screen and (max-width){
    *}*/
`

export const Logo = styled.div`

`

export const Nav = styled.nav`
    display: flex;
    align-items: center;

    /*@media screen and (max-width){
    *}*/
`

export const LinkText = styled.a`
    text-decoration: none;
    font-size: ${linkTextSize};
    font-weight: bold;
    padding: 5px 20px;
    text-transform: capitalize;
    transition: all 0.25s ease-in-out;
    cursor: pointer;

    :hover {
        border-radius: 50px;
        background-color: rgba(0,0,0,0.05);
    } 
    :active {
        transform: scale(0.9);
    }
`

export const DropDownText = styled.a`
    text-decoration: none;
    font-size: ${linkTextSize};
    font-weight: bold;
    padding: 5px 20px;
    text-transform: capitalize;
    transition: all 0.25s ease-in-out;
    cursor: pointer;

    :hover {
        border-radius: 50px;
        background-color: rgba(0,0,0,0.05);
    }

    :hover ${DropDownLinks} {
        transform: scale(1);
    }

    :active ${DropDownLinks} {
        transform: scale(0.9);
    }
`


export const DropDownLinkText = styled.a`
    text-decoration: none;
    font-size: ${linkTextSize};
    font-weight: bold;
    padding: 5px 20px;
    text-transform: capitalize;
    transition: all 0.25s ease-in-out;
    cursor: pointer;

    :hover {
        border-radius: 50px;
        background-color: rgba(0,0,0,0.05);
    } 
    :active {
        transform: scale(0.9);
    }
`

export const DropDown = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DropDownLinks = styled.div`
    display: flex;
    position: absolute;
    transform: scale(0.9);
    padding: 20px 10px;
    background-color: white;
    gap: 15px;
    box-shadow: 0px 25px 20px rgba(0,0,0,0.1);
    border-radius: 15px;
    top: 75px;
    flex-direction: column;
    align-items: center;
`



