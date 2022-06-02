import { Question } from '@domain/entities'

export class QuestionViewModel {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]

  static map (entity: Question): QuestionViewModel {
    return {
      category: entity.category,
      type: entity.type,
      difficulty: entity.difficulty,
      question: entity.question,
      correct_answer: entity.correct_answer,
      incorrect_answers: entity.incorrect_answers
    }
  }

  static mapCollection (entities: Question[]): QuestionViewModel[] {
    return entities.map(QuestionViewModel.map)
  }
}
