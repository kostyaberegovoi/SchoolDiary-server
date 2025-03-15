const express = require('express');

const PORT = process.env.port || 8080

const app = express()

app.get('/', (req, res) => {
    res.send('HELLO')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})  