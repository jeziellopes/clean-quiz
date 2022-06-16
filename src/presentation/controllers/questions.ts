import { QuestionsLoader } from '@domain/usecases'
import { Controller, HttpRequest, HttpResponse, ok, serverError } from '@presentation/contracts'
import { QuestionViewModel } from '@presentation/view-models'

import { EmptyQuizIdError } from './../../domain/errors/empty-quiz-id'

export class LoadQuestionsController implements Controller {
  constructor (private readonly questionsLoader: QuestionsLoader) {
    this.questionsLoader = questionsLoader
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse<QuestionViewModel>> {
    try {
      const questions = await this.questionsLoader.load(httpRequest.params)

      if (httpRequest.params === undefined) {
        throw new EmptyQuizIdError()
      }

      return ok(QuestionViewModel.mapCollection(questions))
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
