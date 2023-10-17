SELECT t.name as teacher, s.name as student, a.name assignment, (ar.completed_at - ar.started_at) as duration
FROM assistance_requests ar
JOIN assignments a ON ar.assignment_id = a.id
JOIN students s ON ar.student_id = s.id
JOIN teachers t ON ar.teacher_id = t.id
ORDER BY duration;
