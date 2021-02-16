import { render, screen } from "@testing-library/react"
import App from "./App"

test("Renders", () => {
  render(<App />)
  const logo = screen.getByAltText("The lunch is right logo")
  expect(logo).toBeVisible
})
