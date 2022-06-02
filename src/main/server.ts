import { app, env } from '@main/config'

app.listen(env.PORT, () => {
  console.clear()
  console.log(`\n⚡️ [SERVER]: ✨ Clean Quiz ✨ is running at https://localhost:${env.PORT}\n`)
})
