import React from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import Logo from "../NavBar/Components/Logo";
import { Button } from "../Buttons/ButtonComponents";
import {
    Header,
    MenuLabel,
    NavContainer,
    Nav,
    NavLink,
    DropDown,
    DropDownContent,
    DropDownText,
    DropDownLinkText,
    NavBackArea
} from "./NavBarMobileComponent";
import { navLinks } from "../NavBar/Data/NavBarData";
import './NavBarMobileStyle.css'
import { Container } from "../Global/Components";

function NavBarMobile() {
    var menuBtnState = false;
    var dropdownBtnState = false;
    function openNav() {
        if (menuBtnState !== true) {
            console.log(menuBtnState);
            document.getElementById("openLinks").style.display = "flex";
            menuBtnState = true;
        } else {
            console.log(menuBtnState);
            document.getElementById("openLinks").style.display = "none";
            menuBtnState = false;
            
        }
    }
    function openDropDown() {
        if (dropdownBtnState !== true) {
            console.log(dropdownBtnState);
            document.getElementById("dropdown_id").style.display = "flex";
            dropdownBtnState = true;
        } else {
            console.log(dropdownBtnState);
            document.getElementById("dropdown_id").style.display = "none";
            dropdownBtnState = false;
        }
    }

    return <>
        <Header>
            <NavContainer>
                <Container >
                    <MenuLabel>
                        <input
                            className="menu_checker"
                            onClick={
                               () => openNav()
                                
                            
                            }
                            type={"checkbox"} />
                        <FiMenu color="#393E45" size={35} />
                        <Logo />
                    </MenuLabel>
                    <Nav id="openLinks" className="nav-animation">
                        {navLinks.map((item) => {
                            return (
                                <>
                                    {item.button ? (
                                        <Button> {item.name} </Button>
                                    ) : item.dropdown ? (
                                        <DropDown>
                                            <DropDownText onClick={() => openDropDown()}>
                                                {item.name}
                                                <FiChevronDown size={"32px"} />
                                            </DropDownText>
                                            <DropDownContent id="dropdown_id" className="dropdown-animation">
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