import styled from "styled-components"

export const OptionsContainer = styled.div`
  width: 50%;
  margin: 28px auto;

  @media (max-width: 698px) {
    width: 100%;
  }
`
export const OptionsMain = styled.div`
  display: flex;
`

export const AdditionalOptionsExpander = styled.div`
  height: ${props => (props.open ? "300px" : "38px")};
  overflow: hidden;
  transition: 350ms height ease-in-out;
  background-color: #ffffff;
  padding: 0 18px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 4px 6px 8px 0 rgba(0, 0, 0, 0.25);
`
export const ExpanderButton = styled.div`
  margin: 8px 0;
  cursor: pointer;
`
