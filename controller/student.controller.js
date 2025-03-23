const db = require('../db')

class StudentController {
    async createStudent(req, res) {
        const {id, name, surname, averagemark} = req.body
        const newStudent = await db.query('INSERT INTO students (id, name, surname, averagemark) values ($1, $2, $3, $4) RETURNING *', [id, name, surname, averagemark])
        res.json(newStudent.rows[0])
    }

    async getStudents(req, res) {
        const allStudents = await db.query('SELECT * FROM students')
        res.json(allStudents.rows)
    }

    async getOneStudent(req, res) {
        const id = req.params.id
        const student = await db.query('SELECT * FROM students where id = $1', [id])
        res.json(student.rows[0])
    }

    async updateStudent(req, res) {
        const {id, name, surname, averagemark} = req.body
        const student = await db.query('UPDATE students set name = $1, surname = $2, averagemark = $3 where id = $4 RETURNING *', [name, surname, averagemark, id])
        res.json(student.rows[0])
    }

    async deleteStudent(req, res) {
        const id = req.params.id
        const student = await db.query('DELETE FROM students where id = $1', [id])
        res.json(student.rows[0])
    }
}

module.exports = new StudentController()