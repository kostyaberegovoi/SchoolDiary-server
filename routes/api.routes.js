const Router = require('express')
const studentRouter = require('./student.routes');
const subjectRouter = require('./subject.routes');

const router = new Router()

router.use('/students', studentRouter);
router.use('/subjects', subjectRouter);

module.exports = router