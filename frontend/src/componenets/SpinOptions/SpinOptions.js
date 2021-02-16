import React, { useState } from "react"
import PropTypes from "prop-types"
import { Alert, Button, Input } from "antd"
import { DownOutlined, UpOutlined } from "@ant-design/icons"
import { OptionsContainer, OptionsMain, AdditionalOptionsExpander, ExpanderButton } from "./components"
import AdditionalOptionsForm from "../AdditionalOptionsForm"

const SpinOptions = ({ location, setLocation, getLunches, hasLunches, isSpinning, setIsSpinning }) => {
  const [inputLocation, setInputLocation] = useState(location)
  const [showAdditional, setShowAdditional] = useState(false)
  const [error, setError] = useState("")

  const handleGetLunches = () => {
    if (!inputLocation) {
      setError("A location is required")
      return
    }
    setError("")
    getLunches()
    setIsSpinning(true)
  }

  if (isSpinning || hasLunches) return null
  return (
    <OptionsContainer>
      <OptionsMain>
        <Input
          placeholder={"Location i.e. postal code, street name, etc"}
          value={inputLocation}
          onChange={e => setInputLocation(e.target.value)}
          onBlur={() => setLocation(inputLocation)}
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
  getLunches: PropTypes.func.isRequired,
  isSpinning: PropTypes.bool.isRequired,
  hasLunches: PropTypes.bool.isRequired,
  setIsSpinning: PropTypes.func.isRequired
}

export default SpinOptions
