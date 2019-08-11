import { cn } from '../../src/helpers/classnames'

test('classnames', () => {
  expect(cn()).toBe('')
  expect(cn('hello')).toBe('hello')
  expect(cn(' hello there  ')).toBe('hello there')
  expect(cn('hello', undefined, {}, 'there')).toBe('hello there')
})
