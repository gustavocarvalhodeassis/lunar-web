import React from "react";

import { Container } from "../../Components/Global/Components";
import { HomeSection, Title, Paragraph, FullWidthImg, Flex, AboutCard, BackgroudDark } from "./HomeComponents";
import './homeStyle.css'
import { Carousel } from "../Carousel/Carousel";
import { carouselData } from "../Carousel/Data/CarouselData";
import { CgTime, CgPullClear, CgSmile } from 'react-icons/cg'

import { aboutCard } from './Data/About'

function Home() {
    return (
        <HomeSection>
            <Container className="section-1">
                <Flex className="main-title">
                    <Title className="divide-content">
                        Um <font>sistema</font> para melhor atender <font>sua empresa.</font>
                    </Title>
                    <Paragraph className="divide-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi magna nulla, rutrum in ornare sed, blandit id ex. Cras consequat, libero a accumsan vestibulum.
                    </Paragraph>
                </Flex>
            </Container>
            <FullWidthImg>
                <Container className="al-cnt js-cnt">
                    <Flex className="information-card">
                        <Flex className="gap-15">
                            <Title>99+</Title>
                            <Paragraph>Empresas<br />Contrataram</Paragraph>
                        </Flex>
                        <Flex className="gap-15">
                            <Title>39</Title>
                            <Paragraph>Representantes</Paragraph>
                        </Flex>
                    </Flex>
                </Container>
            </FullWidthImg>
            <BackgroudDark className="second-area">
                <Container className="about-card">
                    {
                        aboutCard.map((i) => {
                            return <AboutCard>
                                {i.icon}
                                <Title>{i.title}</Title>
                                <Paragraph>{i.description}</Paragraph>
                            </AboutCard>
                        })
                    }

                </Container>
                <Carousel slides={carouselData} />
                <Container>
                    <div className="section-3">
                        <div className="section-3-text">
                            <Title>
                                Deixe de lado o papel e a caneta.
                            </Title>
                            <Paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Morbi magna nulla, rutrum in ornare sed, blandit id ex.
                                Cras consequat, libero a accumsan vestibulum.
                            </Paragraph>
                            <div className="mini-cards">
                            <div className="mini-card">
                                <CgTime color="#7A3FF3" size={45}/>
                                <Paragraph>Economize Tempo.</Paragraph>
                            </div>
                            <div className="mini-card">
                                <CgPullClear color="#7A3FF3" size={45}/>
                                <Paragraph>Economize Espaço.</Paragraph>
                            </div>
                            <div className="mini-card">
                                <CgSmile color="#7A3FF3" size={45}/>
                                <Paragraph>Elimine Complicações.</Paragraph>
                            </div>
                            </div>
                        </div>
                        <div className="section-3-image">
                            <img src="https://images.unsplash.com/photo-1654787193446-434ac0108426?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="simple img" className="image-1"/>
                        </div>
                    </div>
                </Container>
            </BackgroudDark>
        </HomeSection>

    )
}

export default Home