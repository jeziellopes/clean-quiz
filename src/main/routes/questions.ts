
import { ExpressRouterAdapter } from '@main/adapters'
import { makeQuestionsLoaderController } from '@main/factories'
import { Router } from 'express'

export default (router: Router): void => {
  router.get('/questions/:quizId', ExpressRouterAdapter.adapt(makeQuestionsLoaderController()))
}
