import { render, screen } from "@testing-library/react"
import App from "./App"

test("Renders", () => {
  render(<App />)
  const subHeader = screen.getByText(/About?/i)
  expect(subHeader).toBeInTheDocument()
})
