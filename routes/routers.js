const express = require('express')
const router = express.Router()
const controller = require('../controllers/Controllers')


router.get('/', controller.getTodos)
router.post('/list', controller.postTodo)
router.post('/delete', controller.deleteTodo)
router.post('/update', controller.updateTodo)


module.exports = router