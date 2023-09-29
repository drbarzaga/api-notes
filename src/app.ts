// Packages
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import notesRoutes from './routes'

// Creating the app and adding middlewares
const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// Using routes as a middleware
app.use('/api', notesRoutes) // /api/notes

export default app