import { setupRoutes } from '@main/config/routes'
import express from 'express'

// initialize app
export const app = express()

// initialize routes
setupRoutes(app)
