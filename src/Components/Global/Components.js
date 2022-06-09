import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  width: 1100px;

  @media screen and (max-width: 1160px){
    max-width: none;
    width: 100%;
    padding: 0px 60px;
  }
  @media screen and (max-width: 860px){
    padding: 0px 30px;
  }
  @media screen and (max-width: 350px){
    padding: 0px 10px;
  }
`;
