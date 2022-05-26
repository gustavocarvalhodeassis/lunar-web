import React from "react";

import { navLinks } from "./Data/NavBarData";

import {
  Header,
  NavBarContainer,
  LinkText,
  DropDownText,
  DropDownLinkText,
  DropDown,
  DropDownLinks,
  Nav,
} from "./NavBarComponents";

import FilledButton from "../Buttons/filledButton";
import Logo from "./Components/Logo";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Header>
        <NavBarContainer>
          <Logo />
          <Nav>
            {navLinks.map((item) => {
              return (
                <>
                  {
                    item.button ?
                      <FilledButton text={item.name} />
                      : item.dropdown ?
                        <DropDown>
                          {
                            <DropDownText type="checkbox">{item.name}</DropDownText>
                          }
                          <DropDownLinks>
                            {
                              item.linkList.map(
                                (painelList) => {
                                  return (
                                    <>
                                      <DropDownLinkText>
                                        {painelList.name}
                                      </DropDownLinkText>
                                    </>
                                  )
                                }
                              )
                            }
                          </DropDownLinks>
                        </DropDown>
                        : <LinkText>
                          {item.name}
                        </LinkText>
                  }
                </>
              )
            })}
          </Nav>
        </NavBarContainer>
      </Header>
    </>
  );
}

export default NavBar;
