
/*
// server/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/

// server/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import projectsRoutes from './routes/projects.js';
import skillsRoutes from './routes/skills.js';
import educationRoutes from './routes/education.js';
import experiencesRoutes from './routes/experiences.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/services/api/hello', (req, res) => {
  console.log('GET /api/hello hit on server'); // Server-side log
  res.json({ message: 'Hello from backend via proxy!' });
});

app.use('/services/api/projects', projectsRoutes);
app.use('/services/api/skills', skillsRoutes);
app.use('/services/api/education', educationRoutes);
app.use('/services/api/experiences', experiencesRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
