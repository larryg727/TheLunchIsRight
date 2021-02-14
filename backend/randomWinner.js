class RandomWinner {
  constructor(lunches) {
    this.lunches = lunches
  }

  pickWinner() {
    return this.lunches[Math.floor(Math.random() * this.lunches.length)]
  }
}

module.exports = RandomWinner
