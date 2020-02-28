/**
 * Classic scale, where ratio is 2, number of notes is 5.
 * {@link http://spencermortensen.com/articles/typographic-scale/}
 */
export const classic = ({
  currentIndex,
  scale,
  seed
}) => seed * Math.pow(2, currentIndex * scale * 2 / 5)

export const linear = ({
  currentIndex,
  scale,
  seed
}) => (currentIndex * scale * seed) + seed

/**
 * {@link https://en.wikipedia.org/wiki/Golden_ratio}
 */
export const goldenRatio = ({
  currentIndex,
  scale,
  seed
}) => currentIndex === 0
  ? seed
  : seed * Math.pow(1.618, currentIndex) * scale

const scalers = new Map([
  ['classic', classic],
  ['golden-ratio', goldenRatio],
  ['linear', linear]
])

export default scalers
