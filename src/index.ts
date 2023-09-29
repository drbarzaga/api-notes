import app from './app'
import { connectToDatabase } from './database'

const PORT = 3000
connectToDatabase()
app.listen(PORT)
console.log(`Server listening on port ${PORT}`)