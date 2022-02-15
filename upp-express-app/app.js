const express = require('express')
const app = express()

const paymentRoutes = require('./controllers/payment')
app.use('/payment', paymentRoutes)

app.get('/', (req, res) => {
    res.send('Hello')
})

const PORT = process.env.PORT || 3000
app.listen(PORT)