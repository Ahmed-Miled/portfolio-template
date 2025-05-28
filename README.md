# portfolio-template

A full-stack web application template designed to kickstart your portfolio projects. It features a React frontend with Webpack and a Node.js/Express backend connected to a PostgreSQL database.

## Features

*   **Frontend (Client):**
    *   React 19 for building user interfaces.
    *   Webpack 5 for module bundling, development server, and production builds.
    *   Babel for modern JavaScript transpilation.
    *   Bootstrap 5 for styling.
    *   Prettier for code formatting (integration recommended via editor plugin or pre-commit hook).
    *   Development server with Hot Module Replacement (HMR) and API proxying.
*   **Backend (Server):**
    *   Node.js with Express.js for building the API.
    *   PostgreSQL as the database.
    *   `dotenv` for environment variable management.
    *   `cors` for Cross-Origin Resource Sharing.
    *   Basic script for seeding the database (`npm run seed`).
*   **Project Structure:**
    *   Separate `client/` and `server/` directories for a clear separation of concerns.
    *   ES Module syntax (`type: "module"`) used in the backend.

## Tech Stack

*   **Client (Frontend):**
    *   React
    *   JavaScript (ES6+)
    *   Webpack
    *   Babel
    *   Bootstrap
    *   HTML5, CSS3
*   **Server (Backend):**
    *   Node.js
    *   Express.js
    *   PostgreSQL
*   **Development:**
    *   Prettier (code formatting)
    *   Webpack Dev Server

## Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/) (which includes npm) - ^18.x or ^20.x recommended
*   [PostgreSQL](https://www.postgresql.org/download/) - Ensure the PostgreSQL service is running.
*   [Git](https://git-scm.com/)

## Getting Started

1.  **Use this Template:**
    Click the "Use this template" button on the GitHub repository page to create a new repository based on this template.

2.  **Clone your new repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    cd YOUR_REPOSITORY_NAME
    ```

3.  **Setup the Backend (Server):**
    *   Navigate to the server directory:
        ```bash
        cd server
        ```
    *   Install dependencies:
        ```bash
        npm install
        ```
    *   Create a `.env` file in the `server/` directory by copying the example (if you create one) or by creating it manually. It should contain your PostgreSQL connection details:
        ```env
        # server/.env
        DATABASE_URL="postgresql://YOUR_DB_USER:YOUR_DB_PASSWORD@YOUR_DB_HOST:YOUR_DB_PORT/YOUR_DB_NAME"
        PORT=5000
        ```
        Replace the placeholder values with your actual PostgreSQL credentials and desired port for the backend.
    *   (Optional) Seed the database:
        Make sure your PostgreSQL server is running and the database specified in `DATABASE_URL` exists.
        ```bash
        npm run seed
        ```
        *Note: You might need to create the database manually first if the seed script doesn't handle it.*

4.  **Setup the Frontend (Client):**
    *   Navigate to the client directory (from the root of your project):
        ```bash
        cd ../client
        # or if you are in the root: cd client
        ```
    *   Install dependencies:
        ```bash
        npm install
        ```

## Running the Application

You'll need to run the backend server and the frontend development server in separate terminal windows.

1.  **Run the Backend Server:**
    *   Navigate to the `server/` directory:
        ```bash
        cd server
        ```
    *   Start the server:
        ```bash
        npm start
        ```
    By default, the server will run on `http://localhost:5000` (or the `PORT` specified in `server/.env`).

2.  **Run the Frontend Development Server:**
    *   Navigate to the `client/` directory:
        ```bash
        cd client
        ```
    *   Start the development server:
        ```bash
        npm start
        ```
    This will typically open the application in your default web browser at `http://localhost:3000`. The client is configured to proxy API requests starting with `/api` to `http://localhost:5000` (see `client/webpack.config.js`).

## Available Scripts

### Server (`server/package.json`)

*   `npm start`: Starts the Node.js/Express server (using `node server.js`).
*   `npm run seed`: Populates the database using `db/populatedb.js`.
*   `npm test`: (Currently placeholder) "Error: no test specified".

### Client (`client/package.json`)

*   `npm start`: Starts the Webpack development server in development mode (`webpack serve --mode development`).
*   `npm run build`: Builds the client application for production into the `client/dist` folder (`webpack --mode production`).
*   `npm test`: (Currently placeholder) "Error: no test specified".

## Configuration

### Server

*   **`server/.env`**: Main configuration file for the backend.
    *   `DATABASE_URL`: PostgreSQL connection string.
    *   `PORT`: Port for the backend server (defaults to 5000 if not set and server code expects it).

### Client

*   **`client/webpack.config.js`**: Webpack configuration for development and production builds.
    *   Handles Babel transpilation, CSS loading, HTML generation.
    *   `devServer.proxy`: Configured to proxy requests from `/api` on the dev server (port 3000) to the backend server (port 5000).
*   **`client/package.json` (`proxy` field)**: While present, the `webpack.config.js` `devServer.proxy` is the active configuration for the development server started with `webpack serve`. The `proxy` field in `package.json` is typically used by `react-scripts` (Create React App), which doesn't seem to be the primary mechanism here given the explicit `webpack serve` script.

## Directory Structure (Simplified)


## Contributing

Contributions to improve this template are welcome! Please feel free to fork the repository, make your changes, and submit a pull request. If you encounter any issues or have suggestions, please open an issue.

## License

This project is licensed under the ISC License. You can find the license details in the `client/package.json` and `server/package.json` files. It's recommended to also add a `LICENSE` file to the root of your repository containing the full ISC license text.