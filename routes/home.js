const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Homepage',
    url: '/'
  })
})

module.exports = router