import React from "react";
import {
  Header,
  NavBarContainer,
  Ancora,
  Logo,
  DropDown,
  DropDownLinks,
  Option,
  Nav,
} from "./NavBarComponents";

import "./NavBarData/NavBarData";

function NavBar() {
  return (
    <>
      <Header>
        <NavBarContainer>
          <Logo />

          <Nav>
            {navLinks.map((navLink) => (
              <>
                <Ancora>{navLink.name}</Ancora>
                <DropDown></DropDown>
                <DropDownLinks>
                  <Option value="1"></Option>

                  <Option value="2">Como vai</Option>
                </DropDownLinks>
              </>
            ))}
          </Nav>
        </NavBarContainer>
      </Header>
    </>
  );
}

export default NavBar;
