import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Button, Input } from "antd"
import { DownOutlined, UpOutlined } from "@ant-design/icons"
import { useLazyQuery, gql } from "@apollo/client"
import { OptionsContainer, OptionsMain, AdditionalOptionsExpander, ExpanderButton } from "./components"

const GET_LUNCHES = gql`
  query getLunches($location: String!) {
    getLunchSpin(location: $location) {
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

const SpinOptions = ({ location, setLocation, setLunches, hasLunches }) => {
  const [inputLocation, setInputLocation] = useState(location)
  const [showAdditional, setShowAdditional] = useState(false)

  const [getLunches, { data: lunchData }] = useLazyQuery(GET_LUNCHES)

  const handleGetLunches = () => {
    if (!inputLocation) return
    setLocation(inputLocation)
    getLunches({ variables: { location: inputLocation } })
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
        <h2>some other stuff</h2>
      </AdditionalOptionsExpander>
    </OptionsContainer>
  )
}

SpinOptions.propTypes = {
  location: PropTypes.string,
  setLocation: PropTypes.func.isRequired,
  setLunches: PropTypes.func.isRequired,
  hasLunches: PropTypes.bool.isRequired
}

export default SpinOptions
