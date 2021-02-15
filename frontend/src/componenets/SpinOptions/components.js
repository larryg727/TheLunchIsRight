import styled from "styled-components"

export const OptionsContainer = styled.div`
  width: 50%;
  margin: 28px auto;
`
export const OptionsMain = styled.div`
  display: flex;
`

export const AdditionalOptionsExpander = styled.div`
  height: ${props => (props.open ? "380px" : "38px")};
  overflow: hidden;
  transition: 350ms height ease-in-out;
`
export const ExpanderButton = styled.div`
  margin: 8px 0;
  cursor: pointer;
`
