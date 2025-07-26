const express = require('express');
const apiRouter = require('./routes/api.routes');
const cors = require('cors');

const PORT = process.env.port || 4000;

const app = express();
app.use(cors('http://localhost:4000/'));
app.use(express.json());
app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

