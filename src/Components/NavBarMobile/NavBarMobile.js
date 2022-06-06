import React from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import Logo from "../NavBar/Components/Logo";
import { Button } from "../Buttons/ButtonComponents";
import {
  Header,
  MenuLabel,
  Nav,
  NavLink,
  DropDown,
  DropDownContent,
  DropDownText,
  DropDownLinkText,
} from "./NavBarMobileComponent";
import { dropdown, simpleLink, button } from "../NavBar/Data/NavBarData";
import "./NavBarMobileStyle.css";
import { Container } from "../Global/Components";

function NavBarMobile() {
  var menuBtnState = false;
  var dropdownBtnState = false;

  function openNav() {
    if (menuBtnState !== true) {
      console.log(menuBtnState);
      document.getElementById("openLinks").style.display = "flex";
      document.getElementById("closeMenuButton").style.display = "none";
      document.getElementById("showCloseButton").style.display = "block";
      menuBtnState = true;
    } else {
      console.log(menuBtnState);
      document.getElementById("openLinks").style.display = "none";
      document.getElementById("closeMenuButton").style.display = "block";
      document.getElementById("showCloseButton").style.display = "none";
      menuBtnState = false;
    }
  }
  function openDropDown() {
    if (dropdownBtnState !== true) {
      console.log(dropdownBtnState);
      document.getElementById("openDropDown").style.display = "flex";
      dropdownBtnState = true;
    } else {
      console.log(dropdownBtnState);
      document.getElementById("openDropDown").style.display = "none";
      dropdownBtnState = false;
    }
  }

  return (
    <>
      <Header>
        <Container>
          <MenuLabel>
            <input
              className="menu_checker"
              onClick={() => openNav()}
              type={"checkbox"}
            />
            <FiMenu id="closeMenuButton" color="#393E45" size={35} />
            <FiX id="showCloseButton" color="#393E45" size={35} />
            <Logo />
          </MenuLabel>
          <Nav id="openLinks" className="nav-animation">
            {simpleLink.map((item) => {
              return <NavLink>{item.name}</NavLink>;
            })}
            {dropdown.map((item) => {
              return (
                <DropDown>
                  <DropDownText onClick={() => openDropDown()}>
                    {item.name}
                    <FiChevronDown size={24} />
                  </DropDownText>
                  <DropDownContent id="openDropDown">
                    {item.linkList.map((item) => {
                      return <DropDownLinkText>{item.name}</DropDownLinkText>;
                    })}
                  </DropDownContent>
                </DropDown>
              );
            })}
            {button.map((item) => {
              return <Button>Fazer Parte!</Button>;
            })}
          </Nav>
        </Container>
      </Header>
    </>
  );
}

export default NavBarMobile;
