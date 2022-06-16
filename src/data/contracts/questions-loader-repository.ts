import { LoadParamsDTO } from '@data/dtos'
import { QuestionModel } from '@data/models'

export interface QuestionsLoaderRepository {
  loadQuestions: (params: LoadParamsDTO) => Promise<QuestionModel[]>
}
