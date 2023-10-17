SELECT c.name as name, AVG(ar.completed_at - ar.started_at) as average_assistance_time
FROM assistance_requests ar
JOIN students s ON s.id = ar.student_id
JOIN cohorts c ON c.id = s.cohort_id
GROUP BY c.name
ORDER BY average_assistance_time DESC
LIMIT 1;
