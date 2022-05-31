import styled from "styled-components";
import React from "react";

export const Container = styled.div`
  padding: 0px 60px;
  width: 100%;

  @media screen and (min-width: 1160px){
    max-width: 1100px;
  }
  @media screen and (max-width: 940px){
    padding: 0px 30px;
  }
  
`;
