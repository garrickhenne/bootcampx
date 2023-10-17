SELECT DISTINCT t.name as teacher, c.name as cohort, COUNT(ar.*) as total_assistances
FROM teachers t
JOIN assistance_requests ar ON ar.teacher_id = t.id
JOIN students s ON s.id = ar.student_id
JOIN cohorts c ON c.id = s.cohort_id
WHERE c.name = 'JUL02'
GROUP BY t.id, c.id;
