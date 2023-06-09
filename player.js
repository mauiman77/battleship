const player = (name, computer = false) => {
  const randomAttack = () => {
    const vert = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    return [vert[Math.floor(Math.random() * vert.length)], Math.floor(Math.random() * 10)]
  }

  const attack = (coords = []) => {
    return 0
  }

  return { name, computer, randomAttack }
}

module.exports = player
