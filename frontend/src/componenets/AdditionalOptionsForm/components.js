import styled from "styled-components"
import { Checkbox, Select } from "antd"

export const AdditionalFormCntr = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

export const CategorySelect = styled(Select)`
  width: 100%;
`

export const FormGroup = styled.div`
  width: 100%;
`

export const FormGroupHalf = styled.div`
  width: 48%;
`
export const CheckboxGroup = styled(Checkbox.Group)`
  width: 100%;
  margin-top: 6px;
`
export const Label = styled.label`
  margin-top: 10px;
  display: block;

  & > small {
    margin-left: 6px;
  }
`

export const CategoriesBtnCntr = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`
