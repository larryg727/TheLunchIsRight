import { convertMetersToMiles, convertMilesToMeters } from "./utils"

test("1609 meters converts and rounds to 1 mile", () => {
  expect(convertMetersToMiles(1609)).toBe(1)
})

test("1 mile converts to 1609.34 meters", () => {
  expect(convertMilesToMeters(1)).toBe(1609.34)
})
