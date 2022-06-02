import { LoadParamsDTO } from '@data/dtos'
import { QuestionModel } from '@data/models/question'

export interface QuestionsLoaderRepository {
  loadQuestions: (params: LoadParamsDTO) => Promise<QuestionModel[]>
}
