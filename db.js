const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: 'rNovi39Tr23',
    host: "localhost",
    port: 5432,
    database: 'schoolDiary',
});

module.exports = pool