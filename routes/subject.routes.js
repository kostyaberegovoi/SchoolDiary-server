const Router = require('express')
const router = new Router()
const subjectController = require('../controller/subject.controller')

router.post('/', subjectController.createSubject);
router.get('/:id', subjectController.getSubjects);
/*router.get('/subjects/:id', subjectController.getOneSubject)
router.put('/subjects/:id', subjectController.updateSubject)
router.delete('/subjects/:id', subjectController.deleteSubject)*/

module.exports = router