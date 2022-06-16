import { QuestionsLoaderService } from '@data/services'
import { FakeQuestionsLoaderRepository } from '@infra/repositories'
import { HttpRequest, HttpResponse } from '@presentation/contracts'
import { LoadQuestionsController } from '@presentation/controllers/questions'
import { QuestionViewModel } from '@presentation/view-models'

describe('Presentation Controllers', () => {
  test('Load question loader controller instance', () => {
    const fakeRepo = new FakeQuestionsLoaderRepository()
    const questionLoader = new QuestionsLoaderService(fakeRepo)
    const sut = new LoadQuestionsController(questionLoader)
    expect(sut).toBeInstanceOf(LoadQuestionsController)
  })

  test('Make questions loader controller success handling', async () => {
    const mockRequest = { params: { quizId: '000' } } as HttpRequest
    const fakeRepo = new FakeQuestionsLoaderRepository()
    const questionLoader = new QuestionsLoaderService(fakeRepo)
    const sut = new LoadQuestionsController(questionLoader)
    expect(sut.handle(mockRequest)).toBeInstanceOf(Promise<HttpResponse<QuestionViewModel>>)
  })

  test('Make questions loader controller error handling', async () => {
    const mockRequest = {} as HttpRequest
    const fakeRepo = new FakeQuestionsLoaderRepository()
    const questionLoader = new QuestionsLoaderService(fakeRepo)
    const controller = new LoadQuestionsController(questionLoader)
    const sut = controller.handle(mockRequest)
    expect(sut).toBeInstanceOf(Promise<Error>)
  })
})
