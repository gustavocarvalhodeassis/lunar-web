import React from "react";

import { Container } from "../../Components/Global/Components";
import { HomeSection, Title, Paragraph, FullWidthImg, Flex, AboutCard, BackgroudDark } from "./HomeComponents";
import './homeStyle.css'
import { Carousel } from "../Carousel/Carousel";

import {aboutCard} from './Data/About'

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
            <BackgroudDark>
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
            <Carousel />
            </BackgroudDark>
        </HomeSection>

    )
}

export default Home