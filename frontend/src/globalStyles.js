import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', Helvetica, sans-serif;

    & button.ant-btn-primary {
      background-color: #E51C23;
      border-color: #E51C23;

      &:hover,
      :focus {
        background-color: #fc474e;
        border-color: #fc474e;
      }
    }

    & button.ant-btn-secondary {
      &:hover,
      :focus {
        border-color: #fc474e;
        color: #fc474e;
      }
    }
    
    & .ant-checkbox-checked .ant-checkbox-inner {
      background-color: #E51C23;
      border-color: #E51C23;
    }
  }
`
