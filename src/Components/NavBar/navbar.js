import React from "react";

import { navLinks } from "./Data/NavBarData";

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

import {Button} from "../Buttons/ButtonComponents";
import Logo from "./Components/Logo";
import { Link } from "react-router-dom";
import { Container } from "../Global/Components";

import { FiChevronDown } from "react-icons/fi";

function NavBar() {
  return (
    <>
      <Header class>
        <Container>
          <div className="nav-flex">
            <Logo />
            <Nav>
              {navLinks.map((item) => {
                return (
                  <>
                    {item.button ? (
                      <Button> {item.name} </Button>
                    ) : item.dropdown ? (
                      <DropDown>
                        <DropDownText>{item.name}<FiChevronDown size={"32px"} /></DropDownText>
                        <DropDownContent>
                          {item.linkList.map((painelList) => {
                            return (
                              <>
                                <DropDownLinkText>
                                  {painelList.name}
                                </DropDownLinkText>
                              </>
                            );
                          })}
                        </DropDownContent>
                      </DropDown>
                    ) : (
                      <NavLink>{item.name}</NavLink>
                    )}
                  </>
                );
              })}
            </Nav>
            
          </div>
        </Container>
      </Header>
    </>
  );
}

export default NavBar;
