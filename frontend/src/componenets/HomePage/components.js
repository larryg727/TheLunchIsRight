import styled from "styled-components"

export const HeroCntr = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/food-background.jpg"), center;
  background-size: cover;
  padding: 38px;
  height: 80vh;

  @media (max-width: 698px) {
    padding: 18px;
  }
`

export const Logo = styled.img`
  width: 40%;
  margin: 0 auto;
  display: block;

  @media (max-width: 698px) {
    width: 100%;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 998px;
  margin: 0 auto;
  padding: 28px;
  text-align: center;
`
