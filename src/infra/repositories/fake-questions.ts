import { QuestionsLoaderRepository } from '@data/contracts'
import { QuestionModel } from '@data/models'
import { questions as fakeQuestions } from '@infra/datasources'

export class FakeQuestionsLoaderRepository implements QuestionsLoaderRepository {
  async loadQuestions (): Promise<QuestionModel[]> {
    return fakeQuestions
  }
}
