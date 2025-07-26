const db = require('../db')

class StudentController {
    async createStudent(req, res) {
        const {fullname} = req.body;
        const newStudent = await db.query('INSERT INTO students (fullname) values ($1) RETURNING *', [fullname]);
        res.json(newStudent.rows[0]);
    }

    async getStudents(req, res) {
        const allStudents = await db.query('SELECT * FROM students');
        res.json(allStudents.rows);
    }

    async deleteStudent(req, res) {
        const id = req.params.id;
        const student = await db.query('DELETE FROM students where id = $1', [id]);
        res.json(student.rows[0]);
    }

    /*async getOneStudent(req, res) {
        const id = req.params.id
        const student = await db.query('SELECT * FROM students where id = $1', [id])
        res.json(student.rows[0])
    }

    async updateStudent(req, res) {
        const {id, fullname} = req.body
        const student = await db.query('UPDATE students set fullname = $1 where id = $2 RETURNING *', [fullname, id])
        res.json(student.rows[0])
    }*/
}

module.exports = new StudentController()