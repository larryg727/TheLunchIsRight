import React from "react"
import PropTypes from "prop-types"
import { Modal, Button } from "antd"
import { ResultCntr, BusinessInfo, YelpReviewCntr, ButtonGroup } from "./components"
import { convertMetersToMiles } from "../../utils"

const SpinResult = ({ winner, isOpen, clearLunches, spinAgain }) => {
  if (!winner) return null
  console.log(winner)
  return (
    <Modal visible={isOpen} onCancel={clearLunches} footer={null}>
      <ResultCntr>
        <div>
          <img src={winner.photos[0]} alt={`${winner.name}_photo`} />
          <BusinessInfo>
            <h4>{winner.name}</h4>
            <small>{`About ${convertMetersToMiles(winner.distance)} miles away`}</small>
            <small>{winner.price}</small>
            <p>
              {winner.location.address1}, {winner.location.city}, {winner.location.state} {winner.location.postal_code}
            </p>
            <p>{winner.display_phone}</p>
          </BusinessInfo>
        </div>
        <YelpReviewCntr>
          <div>
            <img src={`/assets/yelp_stars/regular_${winner.rating}.png`} alt={`yelp rating ${winner.rating}`} />
            <p>Based on {winner.review_count} Reviews</p>
          </div>
          <a href={winner.url} target="_blank">
            View on <img src="/assets/yelp-logo.png" alt="yelp logo" />
          </a>
        </YelpReviewCntr>
        <ButtonGroup>
          <Button type={"secondary"} onClick={clearLunches}>
            Change Options
          </Button>
          <Button type={"primary"} onClick={spinAgain}>
            Spin Again
          </Button>
        </ButtonGroup>
      </ResultCntr>
    </Modal>
  )
}

SpinResult.propType = {
  winner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    display_phone: PropTypes.string,
    review_count: PropTypes.number,
    rating: PropTypes.number,
    price: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.string),
    distance: PropTypes.number,
    location: PropTypes.shape({
      address1: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      postal_code: PropTypes.string
    })
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  clearLunches: PropTypes.func.isRequired,
  spinAgain: PropTypes.func.isRequired
}

export default SpinResult
