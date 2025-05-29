import pool from './index.js';

// 🧱 Create All Tables
const createTables = async () => {
  await pool.query(`
    -- Projects Table
    CREATE TABLE IF NOT EXISTS projects (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      tags TEXT[],
      github_link TEXT,
      demo_link TEXT,
      image_url TEXT
    );

    -- Skills Table
    CREATE TABLE IF NOT EXISTS skills (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      level TEXT,
      category TEXT
    );

    -- Contact Messages Table
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    -- Work Experience Table
    CREATE TABLE IF NOT EXISTS experiences (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      company TEXT NOT NULL,
      start_date DATE,
      end_date DATE,
      description TEXT
    );

    -- Education Table
    CREATE TABLE IF NOT EXISTS education (
      id SERIAL PRIMARY KEY,
      institution TEXT NOT NULL,
      degree TEXT,
      start_date DATE,
      end_date DATE,
      description TEXT
    );
  `);

  console.log('✅ Tables created');
};

// 🌱 Insert Initial Data
const seedData = async () => {
  await pool.query(`
    -- Projects
    INSERT INTO projects (title, description, tags, github_link, demo_link, image_url)
    VALUES 
      ('Portfolio Website', 'My personal portfolio using React.', ARRAY['React', 'Node', 'PostgreSQL'], 'https://github.com/ahmed/portfolio', 'https://ahmed.dev', '/images/project1.jpg'),
      ('E-commerce App', 'Full-stack e-commerce platform.', ARRAY['React', 'Express', 'PostgreSQL'], 'https://github.com/ahmed/shop', 'https://shop.ahmed.dev', '/images/project1.jpg');

    -- Skills
    INSERT INTO skills (name, level, category)
    VALUES 
      ('JavaScript', 'Advanced', 'Frontend'),
      ('Node.js', 'Intermediate', 'Backend'),
      ('PostgreSQL', 'Intermediate', 'Database');

    -- Experience
    INSERT INTO experiences (title, company, start_date, end_date, description)
    VALUES 
      ('Frontend Developer', 'TechCorp', '2022-01-01', '2023-01-01', 'Worked on UI components.');

    -- Education
    INSERT INTO education (institution, degree, start_date, end_date, description)
    VALUES 
      ('University of CS', 'Bachelor in CS', '2018-09-01', '2022-06-30', 'Learned programming and databases.');
  `);

  console.log('✅ Data seeded');
};

// 🔁 Run Setup
const init = async () => {
  try {
    await createTables();
    await seedData();
  } catch (err) {
    console.error('❌ Error during seed:', err);
  } finally {
    await pool.end();
  }
};

init();
