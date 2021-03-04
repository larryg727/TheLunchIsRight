import React, { useState } from "react"
import PropTypes from "prop-types"
import { Alert, Button, Input } from "antd"
import { DownOutlined, UpOutlined } from "@ant-design/icons"
import { OptionsContainer, OptionsMain, AdditionalOptionsExpander, ExpanderButton } from "./components"
import AdditionalOptionsForm from "../AdditionalOptionsForm"
import { useSelector, useDispatch } from "react-redux"
import { SetIsSpinning, SetLocation } from "../../redux/actions"

const SpinOptions = ({ getLunches }) => {
  const location = useSelector(state => state.Options.location)
  const [inputLocation, setInputLocation] = useState(location)
  const [showAdditional, setShowAdditional] = useState(false)
  const [error, setError] = useState("")

  const dispatch = useDispatch()

  const handleGetLunches = () => {
    if (!inputLocation) {
      setError("A location is required")
      return
    }
    setError("")
    getLunches()
    dispatch(SetIsSpinning(true))
  }

  return (
    <OptionsContainer>
      <OptionsMain>
        <Input
          placeholder={"Location i.e. postal codes, addresses, or street names"}
          value={inputLocation}
          onChange={e => setInputLocation(e.target.value)}
          onBlur={() => dispatch(SetLocation(inputLocation))}
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
  getLunches: PropTypes.func.isRequired
}

export default SpinOptions
