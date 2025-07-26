const db = require('../db');

class SubjectController {
    async createSubject(req, res) {
        const {name, date} = req.body;
        const newSubject = await db.query('INSERT INTO subjects (name, date) values ($1, $2) RETURNING *', [name, date]);
        const subject_id = newSubject.rows[0].id;
        const {student_id, mark} = req.body;
        await db.query('INSERT INTO marks (student_id, subject_id, mark) values ($1, $2, $3) RETURNING *', [student_id, subject_id, mark]);
        res.json(newSubject.rows[0]);
    }

    async getSubjects(req, res) {
        const student_id = req.params.id;
        const { rows } = await db.query(`SELECT id, name, date FROM subjects LEFT JOIN marks ON id = subject_id AND student_id = $1;`, [student_id]);
        console.log('subjects', rows[0])
        res.json(rows);
    }
/*
    async getOneSubject(req, res) {
        const id = req.params.id
        const subject = await db.query('SELECT * FROM subjects where id = $1', [id])
        res.json(subject.rows[0])
    }

    async updateSubject(req, res) {
        const {id, subject, mark, date, student_id} = req.body
        const updatedSubject = await db.query('UPDATE subjects set subject = $1 where id = $2 RETURNING *', [id, subject, mark, date, student_id])
        res.json(updatedSubject.rows[0])
    }

    async deleteSubject(req, res) {
        const id = req.params.id
        const subject = await db.query('DELETE FROM subjects where id = $1', [id])
        res.json(subject.rows[0])
    }*/
}

module.exports = new SubjectController()