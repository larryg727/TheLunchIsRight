import React from "react"
import SpinOptions from "../SpinOptions"
import LunchSpinner from "../LunchSpinner"
import { gql, useLazyQuery } from "@apollo/client"
import { message } from "antd"
import { HeroCntr, Logo, Content, Footer, YelpCreditCntr } from "./components"
import { useSelector, useDispatch } from "react-redux"
import { SetIsSpinning, SetLunches } from "../../redux/actions"

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

const HomePage = () => {
  const location = useSelector(state => state.Options.location)
  const additionalOptions = useSelector(state => state.Options.additionalOptions)
  const isSpinning = useSelector(state => state.LunchChoices.isSpinning)
  const hasLunches = useSelector(state => state.LunchChoices.lunches.length > 0)

  const dispatch = useDispatch()

  const [getLunchesQuery] = useLazyQuery(GET_LUNCHES, {
    onCompleted: data => {
      dispatch(SetLunches(data.getLunchSpin.lunches, data.getLunchSpin.winner))
    },
    onError: error => {
      dispatch(SetIsSpinning(false))
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
          <>
            <Logo src={"/assets/lunchIsRightLogo.png"} alt={"The lunch is right logo"} />
            <SpinOptions getLunches={getLunches} />
          </>
        ) : (
          <LunchSpinner getLunches={getLunches} />
        )}
      </HeroCntr>
      <Content>
        <h2>About The Lunch Is Right Spinner</h2>
        <p>Tired of the ago old question, "What do you want to eat?" Well here is your solution!</p>
        <p>
          Simply enter your location (postal codes, street names, or your address work best) of what area you are
          looking to eat in and click spin. Then, BOOM!, your choice has been made for you. Your welcome.
        </p>
        <p>
          If you don't like the pick, just open up and edit the additional options like types of food, pricing range, or
          how far you are willing to travel and spin again. If you would like more information about the winning
          restaurant then just click on the Yelp link on the results card to view more information and their reviews.
        </p>
      </Content>
      <Footer>
        <Content>
          <YelpCreditCntr>
            Powered by: <img src="/assets/yelp-logo.png" alt="yelp logo" />
          </YelpCreditCntr>
        </Content>
        <p>
          2021 - Developed by{" "}
          <a href="https://github.com/larryg727/TheLunchIsRight" target="_blank">
            Larry Gonzales
          </a>
        </p>
      </Footer>
    </>
  )
}

export default HomePage
