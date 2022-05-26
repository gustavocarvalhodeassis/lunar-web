import React from "react";
import { NavLink, Router } from "react-router-dom";
import {Header, NavBarContainer, Ancora, Logo, DropDown, DropDownLinks, Option,Nav} from'./NavBarComponents'
import './NavBar Data/NavBarData'

function NavBar() {
    return <>
        <Header>

            <NavBarContainer>

                <Logo />

                <Nav>
                    
                    <Ancora>

                    </Ancora>

                    <Ancora>

                    </Ancora>

                    <Ancora>

                    </Ancora>

                    <DropDown>
                      
                            
                    </DropDown>

                    <DropDownLinks>

                        <Option value="1">Olá</Option>

                        <Option value="2">Como vai</Option>

                    </DropDownLinks>

                </Nav>

            </NavBarContainer>

        </Header>

    </>
}

export default NavBar