import React from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import Logo from "../NavBar/Components/Logo";
import { Button } from "../Buttons/ButtonComponents";
import { Header, MenuLabel, NavContainer, Nav, NavLink, DropDown, DropDownContent, DropDownText, DropDownLinkText, NavBackArea } from "./NavBarMobileComponent";
import { navLinks } from "../NavBar/Data/NavBarData";
import './NavBarMobileStyle.css'
import { Container } from "../Global/Components";

function NavBarMobile() {
    var btnState = false
    function openNav() {
        if (btnState !== true) {
            console.log(btnState)
            document.getElementById("openLinks").style.display = "flex"
            btnState = true
        } else {
            console.log(btnState)
            document.getElementById("openLinks").style.display = "none"
            btnState = false
        }
    }

    return <>
        <Header>
            <NavContainer>
                <Container >
                    <MenuLabel>
                        <input
                            className="menu_checker"
                            onClick={() => openNav()}
                            type={"checkbox"} />
                        {btnState ?
                            <FiX color="#393E45" size={35} />
                            : <FiMenu color="#393E45" size={35} />}
                        <Logo />
                    </MenuLabel>
                    <Nav id="openLinks">
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
                </Container>
            </NavContainer>

            <NavBackArea>

            </NavBackArea>
        </Header>
    </>
}

export default NavBarMobile