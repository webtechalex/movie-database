import movies from './index'

describe('movies', () => {
  describe('given no arguments', () => {
    it('returns the default state', () => {
      expect(movies()).toEqual([])
    })
  })
})