import { Question } from '@domain/entities'
import fs from 'fs'
import path from 'path'

const encodedQuestions = fs.readFileSync(path.resolve(__dirname, './questions.json'), 'utf8')

export const questions: Question[] = JSON.parse(encodedQuestions)
  .map((f: Question) => Object.fromEntries(Object
    .entries(f).map(([key, value]) => ([key, value instanceof Array
      ? value.map(valueOption => decodeURIComponent(valueOption))
      : decodeURIComponent(value)])
    ))
  )
