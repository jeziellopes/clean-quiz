import { LoadParamsDTO } from '@data/dtos'
import { Question } from '@domain/entities'

export interface QuestionsLoader {
  load: (params: LoadParamsDTO) => Promise<Question[]>
}
