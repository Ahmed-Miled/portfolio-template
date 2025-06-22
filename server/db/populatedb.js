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
      ('Portfolio Website', 'My personal portfolio using React.', ARRAY['Frontend', 'Web Dev', 'Full Stack', 'Backend', 'Live'], 'https://github.com/Ahmed-Miled/dashboard2', 'https://github.com/Ahmed-Miled/dashboard2', '/images/project1.jpg'),
      ('Shopping Cart', 'A modern e-commerce shopping cart built with React and JavaScript.', ARRAY['Web Dev', 'Frontend', 'Featured', 'Live'], 'https://github.com/Ahmed-Miled/Shopping-Cart', 'https://bie3-bie3.netlify.app/shop', '/images/project2.png'),
      ('Memory Game', 'A classic memory matching game developed using vanilla JavaScript. This project demonstrates my proficiency in DOM manipulation and game logic implementation.', ARRAY['Featured', 'Game', 'Frontend', 'Live'], 'https://github.com/Ahmed-Miled/MemoryCard', 'https://jeux-de-memoire.netlify.app/', '/images/project3.png'),
      ('Tic Tac Toe', 'A classic Tic Tac Toe game implemented in HTML, CSS, and JavaScript.', ARRAY['Game', 'Frontend', 'AI', 'Featured', 'Live'], 'https://github.com/Ahmed-Miled/tic-tac-toe', 'https://ahmed-miled.github.io/tic-tac-toe/', '/images/project4.png'),
      ('Inventory Application', 'A car parts inventory manager that lets users add, edit, and organize parts, brands, and categories through a clean and responsive interface.', ARRAY['Backend', 'Web Dev'], 'https://github.com/Ahmed-Miled/Inventory-Application', '', '/images/project10.png'),
      ('CV Application', 'A CV builder that allows users to dynamically add, edit, and preview resume sections.', ARRAY['Frontend', 'Web Dev', 'Live'], 'https://github.com/Ahmed-Miled/CV-App', 'https://cvapplication-the-odin.netlify.app/', '/images/project5.png'),
      ('Book Library', 'A book management UI concept. Live version coming soon.', ARRAY[]::TEXT[], 'https://github.com/Ahmed-Miled/bookLibrary', '', '/images/project6.png'),
      ('Etch A Sketch', 'A sketch pad inspired by Etch A Sketch. Deployment coming soon.', ARRAY['Frontend', 'Game'], 'https://github.com/Ahmed-Miled/Etch-a-Sketch', '', '/images/project7.png'),
      ('Heat Finder', 'A weather app prototype. Live version not yet available.', ARRAY['Frontend', 'Web Dev'], 'https://github.com/Ahmed-Miled/heatFinder', '', '/images/project8.png'),
      ('Signup Form', 'A responsive signup form with form validation. Deployment pending.', ARRAY['Frontend', 'Web Dev'] , 'https://github.com/Ahmed-Miled/Sign-up-Form', '', '/images/project9.png');
      

    -- Skills
    INSERT INTO skills (name, level, category)
    VALUES 
      ('HTML5, CSS3', 'Advanced', 'Frontend'),
      ('JavaScript (ES6+)', 'Advanced', 'Frontend'),
      ('Bootstrap', 'Advanced', 'Frontend'),
      ('React.js', 'Intermediate ', 'Frontend'),

      ('PHP (with PHPUnit testing)', 'Intermediate', 'Backend'),
      ('Node.js', 'Beginner', 'Backend'),
      ('Express.js', 'Beginner', 'Backend'),

      ('MySQL', 'Intermediate', 'Database'),
      ('PostgreSQL', 'Beginner', 'Database');


    -- Experience
    INSERT INTO experiences (title, company, start_date, end_date, description)
    VALUES 
      ('Frontend Developer', 'TechCorp', '2022-01-01', '2023-01-01', 'Worked on UI components.');

    -- Education
    INSERT INTO education (institution, degree, start_date, end_date, description)
    VALUES 
    (
      'École Supérieure des Sciences et de la Technologie de Hammam Sousse (ESSTHS)',
      'Licence en Génie Logiciel',
      '2023-09-01',
      '2025-06-30',
      'Deuxième année d’un cursus intensif en génie logiciel validée. Développement réussi d’un projet de fin d’année full-stack.'
    ),
    (
      'Lycée Secondaire de Sayada',
      'Baccalauréat en sciences de l''informatique',
      '2018-09-01',
      '2023-06-30',
      'Baccalauréat obtenu avec mention bien.'
    ),
    (
      'Amideast Monastir',
      'Programme "Access Microscholarship"',
      '2014-09-01',
      '2016-06-30',
      'Programme intensif de deux ans en langue anglaise et culture américaine complété.'
    );
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
