
export const cn = (...args) => args.reduce((acc, a) => {
  if (typeof a !== 'string') {
    return acc
  }

  const trimmed = a.trim()

  if (!trimmed) {
    return acc
  }

  return acc ? `${acc} ${trimmed}` : trimmed
}, '')
