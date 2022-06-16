import { Question } from '@domain/entities'
import { QuestionViewModel } from '@presentation/view-models/question'

describe('Presentation View Models', () => {
  test('Question view model map', () => {
    const mockQuestion = {} as Question
    const sut = QuestionViewModel.map(mockQuestion)
    expect(sut).toEqual({} as QuestionViewModel)
  })
})
