import { LoadParamsDTO } from '@data/dtos'
import { QuestionsLoaderService } from '@data/services'
import { Question } from '@domain/entities'
import { FakeQuestionsLoaderRepository } from '@infra/repositories'

describe('Data', () => {
  test('Questions loader service instance', () => {
    const fakeRepo = new FakeQuestionsLoaderRepository()
    const sut = new QuestionsLoaderService(fakeRepo)
    expect(sut).toBeInstanceOf(QuestionsLoaderService)
  })

  test('Questions loader service instance', () => {
    const fakeRepo = new FakeQuestionsLoaderRepository()
    const questionsLoader = new QuestionsLoaderService(fakeRepo)
    const mock: LoadParamsDTO = { quizId: '000' }
    const sut = questionsLoader.load(mock)
    expect(sut).toBeInstanceOf(Promise<Question[]>)
  })
})
