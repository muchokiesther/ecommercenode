import express, {json} from 'express'
import productRoutes from './routes/productRoutes'

const app = express()
// middleware
app.use(json())
app.use('/product',productRoutes)

// listening server
app.listen(4000, () => {
    console.log("server running...,,,")
})