const express = require('express');
const studentRouter = require('./routes/student.routes');

const PORT = process.env.port || 9000

const app = express()

app.use(express.json())
app.use('/api', studentRouter)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})  