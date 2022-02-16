const express = require('express')
const router = express.Router()
const { pay } = require('../services/paymentService')

router.post('/course', (req, res) => {
        pay(req.body)
        res.status(200).json({ message: 'Payment Successfull' })
    }
)

router.post('/accommodation', (req, res) => {
        pay(req.body)
        res.status(200).json({ message: 'Payment Successfull' })
    }
)

router.post('/equipment', (req, res) => {
        pay(req.body)
        res.status(200).json({ message: 'Payment Successfull' })
    }
)

module.exports = router