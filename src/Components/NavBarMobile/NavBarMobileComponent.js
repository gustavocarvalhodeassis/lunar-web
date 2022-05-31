import styled from 'styled-components'


const navTextSize = "1rem";
const navFontWeight = "600";

export const Header = styled.nav` 
  width: 100%;
  display: none;
  padding: 30px 0px;
  align-items: flex-start;
  justify-content: start;

  @media screen and (max-width: 860px){
      display: flex;
  }
`

export const NavContainer = styled.nav` 
    display: flex;
    height: 100%;
    align-items: start;
    justify-content: start;
    flex-direction: column;

`;

export const MenuLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 30px;
    cursor: pointer;
`

export const MenuButton = styled.div`

`

export const Nav = styled.nav` 
    display: none;
    margin-top: 10px;
    padding: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 30px;
    box-shadow: 0px 15px 15px rgba(0,0,0,0.1);
    border-radius: 20px;
    background-color: white;
`

export const NavLink = styled.a`
  text-decoration: none;
  font-size: ${navTextSize};
  font-weight: ${navFontWeight};
  padding: 5px 20px;
  text-transform: capitalize;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  :hover {
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.05);
  }

`;

export const DropDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* DropDown Conteudo á aparecer */
export const DropDownContent = styled.div`
  display: none;
  top: 0px;
  position: absolute;
  padding: 20px 10px;
  background-color: white;
  top: 80px;
  gap: 15px;
  box-shadow: 0px 25px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  flex-direction: column;
  align-items: center;

  &:hover{
      display: flex;
  }
`;

/* DropDown Nome */
export const DropDownText = styled.a`
  text-decoration: none;
  font-size: ${navTextSize};
  font-weight: ${navFontWeight};
  align-items: center;
  display: flex;
  padding: 5px 20px;
  
  text-transform: capitalize;
  cursor: pointer;

  :hover {
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:hover + ${DropDownContent} {
    display: flex;
  }
`;

/* DropDown Nome dos links */
export const DropDownLinkText = styled.a`
  text-decoration: none;
  font-size: ${navTextSize};
  font-weight: ${navFontWeight};
  padding: 5px 20px;
  text-transform: capitalize;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  :hover {
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const NavBackArea = styled.div`
  width: 20%;
  background-color: black;
`