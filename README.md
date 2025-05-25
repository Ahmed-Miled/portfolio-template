# portfolio-template
// root/package.json
{
  "name": "portfolio-template",
  "scripts": {
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "server": "nodemon server/server.js",
    "client": "webpack serve --config client/webpack.config.js",
    "format": "prettier --write ."
  },
  "devDependencies": {
    "concurrently": "^8.0.0",
    "nodemon": "^3.0.0"
  }
}