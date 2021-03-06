# ✨ Clean Quiz ✨

**Clean Quiz** is a **Nodejs/Express** API with **TypeScript**, **ESLint** and _Jest Test Coverage_ applying concepts from **Clean Architecture** by Robert C. Martin.

---

## Non-Functional Requirements

- API with TypeScript using Node (Express or Nestjs)
- API should return same data for any quizId

## Functional Requirements

- One endpoint that receive quizId and return a list with [mock questions](https://raw.githubusercontent.com/jeziellopes/clean-quiz/develop/src/infra/datasources/questions.json):

```json
[
  {
    "category": "Entertainment: Video Games",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What was the name of the hero in the 80s animated video game 'Dragon's Lair'?",
    "correct_answer": "Dirk the Daring",
    "incorrect_answers": ["Arthur", "Sir Toby Belch", "Guy of Gisbourne"]
  },
  ...
]
```

---

## How to start locally

```bash
  # Install dependencies
  yarn

  # Change to develop branch
  git checkout develop

  # Generate .env
  yarn env:copy

  # Start development server
  yarn dev
```
---

## How to test locally

```bash
  # Run tests once
  yarn test

  # Run and watch tests
  yarn test:watch

  # Run and watch tests coverage
  yarn test:cov
```
---
## Important

- In order to prevent ```CORS``` errors, run ```API Requests``` only from allowed origins or change ```allowedOrigins``` inside ```@main/config/cors.config.ts```

```js
const allowedOrigins = ['http://localhost:3000']
```


