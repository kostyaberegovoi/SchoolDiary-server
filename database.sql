create TABLE students(
    fullname VARCHAR(255),
    id SERIAL PRIMARY KEY
)

create TABLE subjects(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    date DATE
)
  
create TABLE marks(
    id SERIAL PRIMARY KEY,
    student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    subject_id INTEGER NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
    mark INTEGER NOT NULL,
    UNIQUE (student_id, subject_id)
)