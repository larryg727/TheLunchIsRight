import React from "react"
import PropTypes from "prop-types"
import SpinOptions from "../SpinOptions"
import LunchSpinner from "../LunchSpinner"
import { gql, useLazyQuery } from "@apollo/client"
import { message } from "antd"

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

const HomePage = ({ setLunches, setIsSpinning, location, additionalOptions }) => {
  const [getLunches] = useLazyQuery(GET_LUNCHES, {
    variables: {
      location: location,
      categories: additionalOptions.categories.length ? additionalOptions.categories.join(",") : "restaurants",
      radius: additionalOptions.radius,
      price: additionalOptions.price.join(",")
    },
    onCompleted: data => {
      setLunches(data.getLunchSpin.lunches, data.getLunchSpin.winner)
    },
    onError: error => {
      setIsSpinning(false)
      message.error(error.message)
    },
    fetchPolicy: "network-only"
  })

  return (
    <div>
      <SpinOptions getLunches={getLunches} />
      <LunchSpinner getLunches={getLunches} />
    </div>
  )
}

HomePage.propType = {
  setLunches: PropTypes.func.isRequired,
  setIsSpinning: PropTypes.func.isRequired,
  additionalOptions: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    radius: PropTypes.number.isRequired,
    price: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  location: PropTypes.string
}

export default HomePage
