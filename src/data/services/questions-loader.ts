
import { QuestionsLoaderRepository } from '@data/contracts'
import { LoadParamsDTO } from '@data/dtos'
import { Question } from '@domain/entities'
import { QuestionsLoader } from '@domain/usecases'

export class QuestionsLoaderService implements QuestionsLoader {
  constructor (private readonly questionsLoaderRepository: QuestionsLoaderRepository) {
    this.questionsLoaderRepository = questionsLoaderRepository
  }

  async load (params: LoadParamsDTO): Promise<Question[]> {
    return this.questionsLoaderRepository.loadQuestions(params)
  }
}
