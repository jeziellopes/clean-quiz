import { makeQuestionsLoaderController } from '@main/factories'
import { LoadQuestionsController } from '@presentation/controllers'

describe('Factories', () => {
  test('Make questions loader controller instance', () => {
    const sut = makeQuestionsLoaderController()
    expect(sut).toBeInstanceOf(LoadQuestionsController)
  })
})
