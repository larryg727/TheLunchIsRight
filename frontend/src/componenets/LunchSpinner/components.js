import styled from "styled-components"

export const Spinner = styled.div`
  width: 40%;
  margin: 0 auto;
  background-color: #515050;
  overflow: hidden;
  border-radius: 5px;
`

export const LunchCard = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 2rem;
  margin: 0.5rem;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
`

export const ResultCntr = styled.div`
  color: #414141;
  font-size: 1rem;

  & > div {
    display: flex;
  }

  & img {
    width: 30%;
    border-radius: 10%;
  }
`

export const BusinessInfo = styled.div`
  padding: 0 2rem;

  & > h4 {
    font-size: 1.25rem;
    margin-bottom: 0;
    line-height: 1rem;
  }

  & > small {
    margin: 0;
    display: block;

    &:last-of-type {
      margin-bottom: 4px;
      line-height: 0.9rem;
    }
  }

  & > p {
    line-height: 1.25rem;
    margin: 0;
  }
`

export const YelpReviewCntr = styled.div`
  width: 100%;
  justify-content: space-between;

  & > div {
    margin-top: 1rem;
  }

  & img {
    width: 120px;
  }

  & p {
    font-size: 0.9rem;
  }
`

export const ButtonGroup = styled.div`
  margin-top: 0.5rem;
  justify-content: space-around;
`
