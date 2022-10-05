import express from 'express'
import { productosRouter } from '../src/routes/productosRoutes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/productos', productosRouter)

export default app