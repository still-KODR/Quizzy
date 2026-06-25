import express from 'express'
import testRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())
app.use("/api", testRoutes)
  
export default app