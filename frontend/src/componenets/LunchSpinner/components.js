import styled from "styled-components"

// Spin Wheel Components
export const Spinner = styled.div`
  width: 40%;
  margin: 28px auto;
  background-color: #515050;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  height: 35rem;

  @media (max-width: 698px) {
    width: 100%;
  }
`

export const CardCntr = styled.div`
  position: absolute;
  width: 100%;
  top: ${props => (props.isSpinning ? "0" : "-268rem")};
  animation: ${props => (props.isSpinning ? "spin 10s linear infinite" : "none")};

  @keyframes spin {
    0% {
      top: 0;
    }
    10% {
      top: -80rem;
    }
    20% {
      top: -150rem;
    }
    30% {
      top: -200rem;
    }
    40% {
      top: -240rem;
    }
    50% {
      top: -260rem;
    }
    55% {
      top: -265rem;
    }
    60% {
      top: -267rem;
    }
    70%,
    100% {
      top: -268rem;
    }
  }
`

export const WheelPointer = styled.div`
  position: absolute;
  height: 0;
  width: 0;
  right: 0;
  top: 15rem;
  bottom: 15rem;
  border-top: 2.5rem solid transparent;
  border-bottom: 2.5rem solid transparent;
  border-right: 5rem solid #8a1919;
`

export const LunchCard = styled.div`
  background-color: transparent;
  color: #ffffff;
  border-radius: 5px;
  padding: 2rem;
  margin: 0.5rem;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  border: 0.5rem solid #e9ca30;
`

// Spin Result components
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
