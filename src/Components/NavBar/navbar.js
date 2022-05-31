import React from "react";

import { navLinks } from "./Data/NavBarData";

import {
  Header,
  LinkText,
  DropDownText,
  DropDownLinkText,
  DropDown,
  DropDownContent,
  Nav,
} from "./NavBarComponents";

import "./navbarStyle.css";

import FilledButton from "../Buttons/filledButton";
import Logo from "./Components/Logo";
import { Link } from "react-router-dom";
import { Container } from "../Global/Components";

import {FiChevronDown} from "react-icons/fi";

function NavBar() {
  return (
    <>
      <Header class>
        <Container>
          <Logo />
          <Nav>
            {navLinks.map((item) => {
              return (
                <>
                  {item.button ? (
                    <FilledButton text={item.name} />
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
                    <LinkText>{item.name}</LinkText>
                  )}
                </>
              );
            })}
          </Nav>
        </Container>
      </Header>
    </>
  );
}

export default NavBar;
