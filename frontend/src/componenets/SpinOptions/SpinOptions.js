import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Alert, Button, Input } from "antd"
import { DownOutlined, UpOutlined } from "@ant-design/icons"
import { useLazyQuery, gql } from "@apollo/client"
import { OptionsContainer, OptionsMain, AdditionalOptionsExpander, ExpanderButton } from "./components"
import AdditionalOptionsForm from "../AdditionalOptionsForm"

const GET_LUNCHES = gql`
  query getLunches($location: String!, $categories: String!, $radius: Float!, $price: String!) {
    getLunchSpin(location: $location, categories: $categories, radius: $radius, price: $price) {
      winner {
        id
        name
        url
        display_phone
        review_count
        rating
        price
        photos
        distance
        location {
          address1
          city
          state
          postal_code
        }
      }
      lunches {
        id
        name
      }
    }
  }
`

const SpinOptions = ({ location, setLocation, setLunches, hasLunches, additionalOptions }) => {
  const [inputLocation, setInputLocation] = useState(location)
  const [showAdditional, setShowAdditional] = useState(false)
  const [error, setError] = useState("")

  const [getLunches, { data: lunchData }] = useLazyQuery(GET_LUNCHES)

  const handleGetLunches = () => {
    if (!inputLocation) {
      setError("A location is required")
      return
    }
    setError("")
    setLocation(inputLocation)
    getLunches({
      variables: {
        location: inputLocation,
        categories: additionalOptions.categories.length ? additionalOptions.categories.join(",") : "restaurants",
        radius: additionalOptions.radius,
        price: additionalOptions.price.join(",")
      }
    })
  }

  useEffect(() => {
    if (lunchData) {
      setLunches(lunchData.getLunchSpin.lunches, lunchData.getLunchSpin.winner)
    }
  }, [lunchData])

  if (hasLunches) return null
  return (
    <OptionsContainer>
      <OptionsMain>
        <Input
          placeholder={"Location i.e. postal code, street name, etc"}
          value={inputLocation}
          onChange={e => setInputLocation(e.target.value)}
        />
        <Button type={"primary"} onClick={handleGetLunches}>
          Spin The Wheel
        </Button>
      </OptionsMain>
      {error && <Alert type={"error"} message={error} />}
      <AdditionalOptionsExpander open={showAdditional}>
        <ExpanderButton onClick={() => setShowAdditional(!showAdditional)}>
          {showAdditional ? (
            <>
              Hide additional options <UpOutlined />
            </>
          ) : (
            <>
              Show additional options <DownOutlined />
            </>
          )}
        </ExpanderButton>
        <AdditionalOptionsForm />
      </AdditionalOptionsExpander>
    </OptionsContainer>
  )
}

SpinOptions.propTypes = {
  location: PropTypes.string,
  setLocation: PropTypes.func.isRequired,
  setLunches: PropTypes.func.isRequired,
  hasLunches: PropTypes.bool.isRequired,
  additionalOptions: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    radius: PropTypes.number.isRequired,
    price: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
}

export default SpinOptions
