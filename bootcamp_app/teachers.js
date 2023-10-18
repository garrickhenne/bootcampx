const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2] || 'JUL02';

pool.query(`
SELECT t.name as teacher, c.name as cohort
FROM teachers t
JOIN assistance_requests ar ON ar.teacher_id = t.id
JOIN students s ON s.id = ar.student_id
JOIN cohorts c ON c.id = s.cohort_id
WHERE c.name LIKE '%${cohortName}%'
GROUP BY c.id, t.id
ORDER BY t.name;
`)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.cohort}: ${user.teacher}`);
    });
  });