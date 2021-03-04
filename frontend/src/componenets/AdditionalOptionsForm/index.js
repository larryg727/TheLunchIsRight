import React from "react"
import { useQuery, gql } from "@apollo/client"
import {
  AdditionalFormCntr,
  CategorySelect,
  FormGroup,
  FormGroupHalf,
  CheckboxGroup,
  Label,
  CategoriesBtnCntr
} from "./components"
import { useFormHandler, convertMetersToMiles, convertMilesToMeters } from "../../utils"
import { Button, Checkbox, Input } from "antd"
import { useSelector, useDispatch } from "react-redux"
import { SetAdditionalOptions } from "../../redux/actions"

const { Option } = CategorySelect

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      title
      alias
    }
  }
`

const AdditionalOptionsForm = () => {
  const additionalOptions = useSelector(state => state.Options.additionalOptions)
  const [formState, formHandler] = useFormHandler(additionalOptions)

  const dispatch = useDispatch()

  const handleOnBlur = () => {
    dispatch(SetAdditionalOptions(formState))
  }

  const { data: categoriesData } = useQuery(GET_CATEGORIES, {
    onCompleted: data => {
      if (!formState.categories.length) {
        formHandler("categories", data.categories.map(c => c.alias))
      }
    }
  })

  const handleClearAllCategories = () => {
    formHandler("categories", [])
    dispatch(SetAdditionalOptions([]))
  }

  const handleSelectAllCategories = () => {
    const allCategories = categoriesData.categories.map(c => c.alias)
    formHandler("categories", allCategories)
    dispatch(SetAdditionalOptions(allCategories))
  }

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
        <CategoriesBtnCntr>
          <Button type={"default"} size={"small"} onClick={handleClearAllCategories}>
            Clear All Categories
          </Button>
          <Button type={"default"} size={"small"} onClick={handleSelectAllCategories}>
            Select All Categories
          </Button>
        </CategoriesBtnCntr>
      </FormGroup>
    </AdditionalFormCntr>
  )
}

export default AdditionalOptionsForm
