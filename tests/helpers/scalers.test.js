import { classic, linear, goldenRatio } from '../../src/helpers/scalers'

const getInitialItem = () => ({
  currentIndex: 0,
  scale: 1,
  seed: 12
})

test.only('classic scale', () => {
  expect(classic(getInitialItem())).toBe(12)
  expect(classic({
    currentIndex: 0,
    scale: 1.5,
    seed: 12
  })).toBe(12)
})

test('linear scale', () => {
  expect(linear(getInitialItem())).toBe(12)
  expect(
    linear({
      currentIndex: 5,
      scale: 1,
      seed: 12
    })
  ).toBe(72)
  expect(linear({
    currentIndex: 0,
    scale: 1.5,
    seed: 12
  })).toBe(12)
})

test('golden ratio scale', () => {
  expect(goldenRatio(getInitialItem())).toBe(12)
  expect(goldenRatio({
    currentIndex: 1,
    scale: 1,
    seed: 12
  })).toBe(1 * 1.618 * 12)
  expect(goldenRatio({
    currentIndex: 2,
    scale: 2,
    seed: 16
  })).toBe(2 * 1.618 * 1.618 * 16)
  expect(goldenRatio({
    currentIndex: 0,
    scale: 2,
    seed: 12
  })).toBe(12)
})
