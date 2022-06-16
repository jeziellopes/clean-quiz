import { EmptyQuizIdError } from './empty-quiz-id'

describe('Errors', () => {
  test('Empty quiz id error instance', () => {
    const sut = new EmptyQuizIdError()
    expect(sut).toBeInstanceOf(EmptyQuizIdError)
  })

  test('Empty quiz id error name', () => {
    const sut = new EmptyQuizIdError()
    expect(sut.name).toStrictEqual('EmptyQuizIdError')
  })
})
