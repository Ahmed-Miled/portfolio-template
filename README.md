# portfolio-template
[Click here to view the live demo](https://ahmed-miled-portfolio.netlify.app) <br>

A full-stack web application template designed to kickstart your portfolio projects. It features a React frontend with Webpack and a Node.js/Express backend connected to a PostgreSQL database. This template includes project-wide code formatting with Prettier.


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
  - Bootstrap
  - HTML5, CSS3
- **Server (Backend):**
  - Node.js
  - Express.js
  - PostgreSQL
- **Development & Tooling:**
  - **Prettier** (automated code formatting for the entire project)
  - Webpack Dev Server

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (which includes npm) - ^18.x or ^20.x recommended
- [PostgreSQL](https://www.postgresql.org/download/) - Ensure the PostgreSQL service is running.
- [Git](https://git-scm.com/)

## Getting Started

1.  **Use this Template:**
    Click the "Use this template" button on the GitHub repository page to create a new repository based on this template.

2.  **Clone your new repository:**

    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    cd YOUR_REPOSITORY_NAME
    ```

3.  **Install Root Dependencies:**
    These include development tools like Prettier.

    ```bash
    npm install
    ```

    _It's highly recommended to configure your code editor to use Prettier with "format on save" for an optimal development experience. Open the root project folder in your editor._

4.  **Setup the Backend (Server):**

    - Navigate to the server directory:
      ```bash
      cd server
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Create a `.env` file in the `server/` directory by copying the example (if you create one) or by creating it manually. It should contain your PostgreSQL connection details:
      ```env
      # server/.env
      DATABASE_URL="postgresql://YOUR_DB_USER:YOUR_DB_PASSWORD@YOUR_DB_HOST:YOUR_DB_PORT/YOUR_DB_NAME"
      PORT=5000
      ```
      Replace the placeholder values with your actual PostgreSQL credentials and desired port for the backend.
    - (Optional) Seed the database:
      Make sure your PostgreSQL server is running and the database specified in `DATABASE_URL` exists.
      ```bash
      npm run seed
      ```
      _Note: You might need to create the database manually first if the seed script doesn't handle it._

5.  **Setup the Frontend (Client):**
    - Navigate to the client directory (from the root of your project):
      ```bash
      cd ../client
      # or if you are in the root: cd client
      ```
    - Install dependencies:
      ```bash
      npm install
      ```

## Running the Application

You'll need to run the backend server and the frontend development server in separate terminal windows.

1.  **Run the Backend Server:**

    - Navigate to the `server/` directory:
      ```bash
      cd server
      ```
    - Start the server:
      `bash
    npm start
    `
      By default, the server will run on `http://localhost:5000` (or the `PORT` specified in `server/.env`).

2.  **Run the Frontend Development Server:**
    - Navigate to the `client/` directory:
      ```bash
      cd client
      ```
    - Start the development server:
      `bash
    npm start
    `
      This will typically open the application in your default web browser at `http://localhost:3000`. The client is configured to proxy API requests starting with `/api` to `http://localhost:5000` (see `client/webpack.config.js`).

## Available Scripts

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

## Directory Structure (Simplified)

/portfolio-template <br>
├── client/ <br>
│ ├── public/<br>
│ ├── src/<br>
│ ├── package.json<br>
│ └── webpack.config.js<br>
├── server/ <br>
│ ├── db/ <br>
│ ├── .env # (You create this) <br>
│ ├── package.json <br>
│ └── server.js<br>
├── .prettierrc.json<br>
├── package.json<br>
└── README.md<br>
