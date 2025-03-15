create TABLE students(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    average mark INTEGER,
)

create TABLE subjects(
    id SERIAL PRIMARY KEY,
    subject VARCHAR(255),
    mark INTEGER,
    date DATE,
)