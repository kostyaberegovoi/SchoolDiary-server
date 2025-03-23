const Router = require('express')
const router = new Router()
const studentController = require('../controller/student.controller')

router.post('/students', studentController.createStudent)
router.get('/students', studentController.getStudents)
router.get('/students/:id', studentController.getOneStudent)
router.put('/students/:id', studentController.updateStudent)
router.delete('/students/:id', studentController.deleteStudent)

module.exports = router