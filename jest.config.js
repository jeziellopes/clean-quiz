// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */

const config = {
  verbose: true,
  collectCoverageFrom: [
    'src/**/**/*.ts'
  ],
  coveragePathIgnorePatterns: [
    '.adapter.ts',
    '.config.ts',
    '.middleware.ts',
    '.route.ts',
    'index.ts',
    'server.ts',
    'question.ts'
  ],
  coverageThreshold: {
    global: {
      lines: 100,
      statements: 100
    }
  }
}

module.exports = config
