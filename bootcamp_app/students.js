const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const limit = process.argv[3] || 5;
const name = process.argv[2] || 'FEB';
const values = [`%${name}%`, limit];

pool.query(`
SELECT students.id, students.name, cohorts.name as cohort_id
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;
`, values)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`);
    });
  })
  .catch(err => console.error('query error', err.stack));