import styled from "styled-components"

export const HeroCntr = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/food-background.jpg"), center;
  background-size: cover;
  padding: 38px;
  height: 90vh;

  @media (max-width: 698px) {
    padding: 18px;
  }
`

export const Logo = styled.img`
  width: 30%;
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

export const Footer = styled.div`
  width: 100%;
  background-color: #1b1b1b;
  color: #ffffff;

  & > p {
    font-size: 0.8rem;
    text-align: center;
    padding: 4px;
  }
`

export const YelpCreditCntr = styled.div`
  font-size: 1.2rem;

  & > img {
    width: 140px;
    margin-left: 8px;
  }
`
