const express = require('express')
const router = express.Router()

router.post('/course', (req, res) => {
        res.status(200).json({ message: 'Payment Successfull' })
    }
)

router.post('/accommodation', (req, res) => {
        res.status(200).json({ message: 'Payment Successfull' })
    }
)

module.exports = router