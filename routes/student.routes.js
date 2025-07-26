const Router = require('express')
const router = new Router()
const studentController = require('../controller/student.controller')

router.post('/', studentController.createStudent);
router.get('/', studentController.getStudents);
router.delete('/:id', studentController.deleteStudent);
/*router.get('/students/:id', studentController.getOneStudent)
router.put('/students/:id', studentController.updateStudent)*/

module.exports = router