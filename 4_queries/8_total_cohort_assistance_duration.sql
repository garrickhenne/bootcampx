SELECT c.name as cohort, SUM(completed_at - started_at) as total_duration
FROM assistance_requests
JOIN students s ON s.id = assistance_requests.student_id
JOIN cohorts c ON c.id = s.cohort_id
GROUP BY c.name
ORDER BY total_duration;
