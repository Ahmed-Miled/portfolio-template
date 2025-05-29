// client/src/services/api.js
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/services/api'; // Your server URL

export const getProjects = async () => {
  const response = await fetch(`${API_BASE_URL}/projects`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
};

export const getSkills = async () => {
  const response = await fetch(`${API_BASE_URL}/skills`);
  if (!response.ok) {
    throw new Error('Failed to fetch skills');
  }
  return response.json();
};

export const getExperiences = async () => {
  const response = await fetch(`${API_BASE_URL}/experiences`);
  if (!response.ok) {
    throw new Error('Failed to fetch experiences');
  }
  return response.json();
};

export const getEducation = async () => {
  const response = await fetch(`${API_BASE_URL}/education`);
  if (!response.ok) {
    throw new Error('Failed to fetch education');
  }
  return response.json();
};

// We'll add sendMessage later for the contact form
// export const sendMessage = async (messageData) => { ... };