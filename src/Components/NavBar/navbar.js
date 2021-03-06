import React from "react";

import { simpleLink, dropdown, button } from "./Data/NavBarData";

import {
  Header,
  NavLink,
  DropDownText,
  DropDownLinkText,
  DropDown,
  DropDownContent,
  Nav,
} from "./NavBarComponents";

import "./NavBarStyle.css";

import { Button } from "../Buttons/ButtonComponents";
import Logo from "./Components/Logo";
import { Link } from "react-router-dom";
import { Container } from "../Global/Components";

import { FiChevronDown } from "react-icons/fi";

function NavBar() {
  return (
    <>
      <Header>
        <Container>
          <div className="nav-flex">
            <Logo />
            <Nav>
              {simpleLink.map((item) => {
                return <NavLink>{item.name}</NavLink>;
              })}
              {dropdown.map((item) => {
                return (
                  <DropDown>
                    <DropDownText>{item.name}</DropDownText>
                    <DropDownContent>
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
          </div>
        </Container>
      </Header>
    </>
  );
}

export default NavBar;

{
  /*<>
                    {navLinks.map((item) => {
                      return (
                        <>
                          {item.simple((i) => {
                            return 
                          })}
                          ,
                          {item.dropdown((i) => {
                            return <NavLink>{i.name}</NavLink>;
                          })}
                          ,
                          {item.button((i) => {
                            return <Button>{i.name}</Button>;
                          })}
                        </>
                      );
                    })}
                  </>*/
}
