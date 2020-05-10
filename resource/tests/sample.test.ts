// sample.test.ts
import { sum } from '@/components/Test/Example'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

describe('sum() のテスト', () => {
  it('sum(1, 2) == 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
