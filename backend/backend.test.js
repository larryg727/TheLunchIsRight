const RandomWinner = require("./randomWinner")
const { getAllCategories } = require("./mockData")

test("With one entry random winner is not random", () => {
  const randomWinner = new RandomWinner(["Winner"])
  expect(randomWinner.pickWinner()).toBe("Winner")
})

test("Winner is in options", () => {
  const options = ["one", "two", "three", "four", "five"]
  const randomWinner = new RandomWinner(options)
  expect(options).toContain(randomWinner.pickWinner())
})

test("Vegetarian and Pizza are in categories", () => {
  expect(getAllCategories()).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        title: "Vegetarian"
      }),
      expect.objectContaining({
        title: "Pizza"
      })
    ])
  )
})
