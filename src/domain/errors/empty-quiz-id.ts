export class EmptyQuizIdError extends Error {
  constructor () {
    super('Empty Quiz Id')
    this.name = 'EmptyQuizIdError'
  }
}
