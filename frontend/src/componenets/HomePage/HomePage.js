import React from "react"
import PropTypes from "prop-types"
import SpinOptions from "../SpinOptions"
import LunchSpinner from "../LunchSpinner"
import { gql, useLazyQuery } from "@apollo/client"
import { message } from "antd"
import { HeroCntr, Logo, Content } from "./components"

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

const HomePage = ({ setLunches, setIsSpinning, location, additionalOptions, isSpinning, hasLunches }) => {
  const [getLunchesQuery] = useLazyQuery(GET_LUNCHES, {
    onCompleted: data => {
      setLunches(data.getLunchSpin.lunches, data.getLunchSpin.winner)
    },
    onError: error => {
      setIsSpinning(false)
      message.error(error.message)
    },
    fetchPolicy: "network-only"
  })

  const getLunches = () => {
    getLunchesQuery({
      variables: {
        location: location,
        categories: additionalOptions.categories.length ? additionalOptions.categories.join(",") : "restaurants",
        radius: additionalOptions.radius,
        price: additionalOptions.price.join(",")
      }
    })
  }

  return (
    <>
      <HeroCntr>
        {!isSpinning && !hasLunches ? (
          <Logo src={"/assets/lunchIsRightLogo.png"} alt={"The lunch is right logo"} />
        ) : null}
        <SpinOptions getLunches={getLunches} />
        <LunchSpinner getLunches={getLunches} />
      </HeroCntr>
      <Content>
        <h2>About</h2>
        <p>Tired of the ago old question, "What do you want to eat?" Well here is your solution!</p>
        <p>
          Simply enter your location (postal codes or addresses / street names work best) of what area you are looking
          to eat in and click spin. Then, BOOM!, your choice has been made for you. Your welcome.
        </p>
        <p>
          If you have certain preferences like types of food, pricing, or how far you would like to travel then just
          open up the additional options and add your preferences. If you need more information about the restaurant
          then just click on the Yelp link to view more information and reviews.
        </p>
      </Content>
    </>
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
  location: PropTypes.string,
  isSpinning: PropTypes.bool.isRequired,
  hasLunches: PropTypes.bool.isRequired
}

export default HomePage
