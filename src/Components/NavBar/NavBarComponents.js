import styled from "styled-components";

const linkTextSize = "1.25rem";

/* Fundo da NavBar */
export const Header = styled.header`
  padding: 30px 0px;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

/* Separa a logo dos links para o SpaceBetween */
export const Nav = styled.nav`
  display: flex;
  align-items: center;

  /*@media screen and (max-width){
    *}*/
`;

/* Links da navBar */
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
    background-color: rgba(0, 0, 0, 0.05);
  }

`;

/* DropDown Base */
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
  font-size: ${linkTextSize};
  font-weight: bold;
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
  font-size: ${linkTextSize};
  font-weight: bold;
  padding: 5px 20px;
  text-transform: capitalize;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  :hover {
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
