import { Question } from '@domain/entities'
import { FakeQuestionsLoaderRepository } from '@infra/repositories'

describe('Repositories', () => {
  test('Questions loader repository instance', () => {
    const sut = new FakeQuestionsLoaderRepository()
    expect(sut).toBeInstanceOf(FakeQuestionsLoaderRepository)
  })

  test('Questions loader repository load questions', () => {
    const fakeRepo = new FakeQuestionsLoaderRepository()
    const sut = fakeRepo.loadQuestions()
    expect(sut).toBeInstanceOf(Promise<Question[]>)
  })
})
