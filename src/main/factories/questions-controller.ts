import { QuestionsLoaderService } from '@data/services'
import { FakeQuestionsLoaderRepository } from '@infra/repositories'
import { Controller } from '@presentation/contracts'
import { LoadQuestionsController } from '@presentation/controllers'

export const makeQuestionsLoaderController = (): Controller => {
  const questionsLoaderRepository = new FakeQuestionsLoaderRepository()
  const questionsLoaderService = new QuestionsLoaderService(questionsLoaderRepository)
  return new LoadQuestionsController(questionsLoaderService)
}
