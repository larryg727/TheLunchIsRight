import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Button, Input } from "antd"
import { DownOutlined, UpOutlined } from "@ant-design/icons"
import { useLazyQuery, gql } from "@apollo/client"

const GET_LUNCHES = gql`
  query getLunches($location: String!) {
    lunches(location: $location) {
      name
    }
  }
`

const SpinOptions = ({ location, setLocation }) => {
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
      console.log(lunchData)
    }
  }, [lunchData])

  return (
    <div className="options-cntr">
      <div className="main-options">
        <Input
          placeholder={"Location i.e. postal code, street name, etc"}
          value={inputLocation}
          onChange={e => setInputLocation(e.target.value)}
        />
        <Button type={"primary"} onClick={handleGetLunches}>
          Spin The Wheel
        </Button>
      </div>
      <div className={showAdditional ? "additional-options show" : "additional-options"}>
        <div id={"show-btn"} onClick={() => setShowAdditional(!showAdditional)}>
          {showAdditional ? (
            <>
              <UpOutlined /> Hide additional options
            </>
          ) : (
            <>
              <DownOutlined /> Show additional options
            </>
          )}
        </div>
        <h2>some other stuff</h2>
      </div>
    </div>
  )
}

SpinOptions.propTypes = {
  location: PropTypes.string,
  setLocation: PropTypes.func.isRequired
}

export default SpinOptions
