# portfolio-template


A full-stack web application template designed to kickstart your portfolio projects. It features a React frontend with Webpack and a Node.js/Express backend connected to a PostgreSQL database. This template includes project-wide code formatting with Prettier.

## Live Demo

[Click here to view the live demo](https://ahmed-miled-portfolio.netlify.app) 

## Repository

[https://github.com/Ahmed-Miled/portfolio-template](https://github.com/Ahmed-Miled/portfolio-template)

---

## Features

- **Frontend (Client):**
  - React 19 for building user interfaces.
  - Webpack 5 for module bundling, development server, and production builds.
  - Babel for modern JavaScript transpilation.
  - Bootstrap 5 for styling.
  - Development server with Hot Module Replacement (HMR) and API proxying.
- **Backend (Server):**
  - Node.js with Express.js for building the API.
  - PostgreSQL as the database.
  - `dotenv` for environment variable management.
  - `cors` for Cross-Origin Resource Sharing.
  - Basic script for seeding the database (`npm run seed`).
- **Project-Wide:**
  - **Prettier:** Integrated for consistent code formatting across both client and server code, configured via `.prettierrc.json`.
  - Separate `client/` and `server/` directories for a clear separation of concerns.
  - ES Module syntax (`type: "module"`) used in the backend.

## Tech Stack

- **Client (Frontend):**
  - React
  - JavaScript (ES6+)
  - Webpack
  - Babel
  - HTML5
  - Framer Motion
  - React Router
  - React Icons  
- **Server (Backend):**
  - Node.js
  - Express.js
  - PostgreSQL
- **Styling :**
  - Bootstrap 5
  - CSS  
- **Development & Tooling:**
  - **Prettier** (automated code formatting for the entire project)
  - Webpack Dev Server

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)  
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)  
- PostgreSQL database (can use local or remote service)  

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/Ahmed-Miled/portfolio-template.git
cd portfolio-template
```

2.  **Install Dependencies**
    Run the following commands separately in the root, client, and server folders:
    
```bash
npm install   
npm install --prefix client
npm install --prefix server
```

  _Note: It's highly recommended to configure your code editor to use Prettier with "format on save" for an optimal development experience._


3.  **Configure environment variables**

- Create a `.env` file inside the server folder with the following content: `DATABASE_URL=your_postgresql_connection_string`

- Replace your_postgresql_connection_string with your own PostgreSQL connection string.

_Note: You might need to create the database manually first if the seed script doesn't handle it._



## Running the Application

0.  **Seed the database (optional, but recommended for first setup):**

In the root folder, run:
```bash
npm run seed --prefix server
```
This will populate your database with example portfolio data.


1.  **Run the Backend Server:**
You'll need to run the backend server and the frontend development server in separate terminal windows.

- Navigate to the `server/` directory:
      ```bash
      cd server
      ```
- Start the server:
    ```bash
    npm start
    ```
  By default, the server will run on `http://localhost:3000` (or the `PORT` if specified in `server/.env`).

2.  **Run the Frontend Development Server:**
  - Navigate to the `client/` directory:
      ```bash
      cd client
      ```
  - Start the development server:
      ```bash
    npm start
    ```
      This will typically open the application in your default web browser at `http://localhost:3000`. The client is configured to proxy API requests starting with `/services/api` to `http://localhost:5000` (see `client/webpack.config.js`).


### Root Project (`./package.json`)

- `npm run format`: Formats all relevant files in the project using Prettier.
- `npm run format:check`: Checks if all relevant files are formatted correctly according to Prettier rules (exits with an error if not).

### Server (`server/package.json`)

- `npm start`: Starts the Node.js/Express server (using `node server.js`).
- `npm run seed`: Populates the database using `db/populatedb.js`.
- `npm test`: (Currently placeholder) "Error: no test specified".

### Client (`client/package.json`)

- `npm start`: Starts the Webpack development server in development mode (`webpack serve --mode development`).
- `npm run build`: Builds the client application for production into the `client/dist` folder (`webpack --mode production`).
- `npm test`: (Currently placeholder) "Error: no test specified".

## Configuration

- **`.prettierrc.json` (Root):** Configuration file for Prettier, defining code style rules for the entire project.
- **`server/.env` (Server):** Main configuration file for the backend.
  - `DATABASE_URL`: PostgreSQL connection string.
  - `PORT`: Port for the backend server (defaults to 5000 if not set and server code expects it).
- **`client/webpack.config.js` (Client):** Webpack configuration for development and production builds.
  - Handles Babel transpilation, CSS loading, HTML generation.
  - `devServer.proxy`: Configured to proxy requests from `/api` on the dev server (port 3000) to the backend server (port 5000).
- **`client/package.json` (`proxy` field)**: While present, the `webpack.config.js` `devServer.proxy` is the active configuration for the development server started with `webpack serve`.

## Customization

- **Modifying portfolio data:** 
To customize your portfolio content (projects, skills, education, contact info), modify the seed data in: `server/db/populatedb.js`
After modifying, rerun the seed script to update your database: `npm run seed --prefix server`

- **Frontend customization:** 

The React client fetches data from the backend API. You can also customize UI components inside the `client/src` folder as needed.

## Directory Structure (Simplified)

/portfolio-template  
├── client/ # React frontend  
├── server/# Express backend & database seed script  
├── .prettierrc.json  
├── package.json # Root package.json with main scripts  
└── README.md  


## Contact
If you have questions or want to connect, feel free to reach out!