import { Question } from '@domain/entities'
import { questions } from '@infra/datasources'

describe('Datasources', () => {
  test('Fake questions', () => {
    const sut = questions
    expect(sut).toBeInstanceOf(Array<Question>)
  })
})
