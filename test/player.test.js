const Player = require('../src/player');

describe('Player creation', () => {
  it('expect the game board is created ', () => {
      const pin = 'X'
    const player = new Player(pin);
    expect(player).toBeInstanceOf(Player);
    expect(player.pin).toEqual(pin);
  });
});