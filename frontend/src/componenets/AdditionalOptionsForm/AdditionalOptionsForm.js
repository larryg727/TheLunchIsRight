import React from "react"
import PropTypes from "prop-types"
import { useQuery, gql } from "@apollo/client"
import { AdditionalFormCntr, CategorySelect, FormGroup, FormGroupHalf, CheckboxGroup, Label } from "./components"
import { useFormHandler, convertMetersToMiles, convertMilesToMeters } from "../../utils"
import { Checkbox, Input } from "antd"

const { Option } = CategorySelect

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      title
      alias
    }
  }
`

const AdditionalOptionsForm = ({ additionalOptions, setAdditionalOptions }) => {
  const [formState, formHandler] = useFormHandler(additionalOptions)

  const handleOnBlur = () => {
    setAdditionalOptions(formState)
  }

  const { data: categoriesData } = useQuery(GET_CATEGORIES, {
    onCompleted: data => {
      if (!formState.categories.length) {
        formHandler("categories", data.categories.map(c => c.alias))
      }
    }
  })

  return (
    <AdditionalFormCntr>
      <FormGroupHalf>
        <Label>
          Radius<small>Miles</small>
        </Label>
        <Input
          type={"number"}
          value={convertMetersToMiles(formState.radius)}
          onChange={e => formHandler("radius", convertMilesToMeters(e.target.value))}
          onBlur={handleOnBlur}
        />
      </FormGroupHalf>
      <FormGroupHalf>
        <Label>Price</Label>
        <CheckboxGroup onChange={values => formHandler("price", values)} value={formState.price} onBlur={handleOnBlur}>
          <Checkbox value={"1"}>$</Checkbox>
          <Checkbox value={"2"}>$$</Checkbox>
          <Checkbox value={"3"}>$$$</Checkbox>
          <Checkbox value={"4"}>$$$$</Checkbox>
        </CheckboxGroup>
      </FormGroupHalf>
      <FormGroup>
        <Label>
          Categories <small>Deselect to exclude from results</small>
        </Label>
        <CategorySelect
          placeholder={"Please Select A Category"}
          mode={"multiple"}
          value={formState.categories}
          onChange={values => formHandler("categories", values)}
          onBlur={handleOnBlur}
          allowClear={true}
        >
          {categoriesData &&
            categoriesData.categories.map(category => (
              <Option key={category.alias} value={category.alias}>
                {category.title}
              </Option>
            ))}
        </CategorySelect>
      </FormGroup>
    </AdditionalFormCntr>
  )
}

AdditionalOptionsForm.propTypes = {
  additionalOptions: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    radius: PropTypes.number.isRequired,
    price: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  setAdditionalOptions: PropTypes.func.isRequired
}

export default AdditionalOptionsForm
