const express = require('express');
const app = express();
const winston = require('winston');

// Logger configuration using winston
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.printf(({ timestamp, message }) => `${timestamp} - ${message}`)
  ),
  transports: [
    new winston.transports.Console()
  ]
});

// Get environment variables or default values
const backendNetwork = process.env.BACKEND_NETWORK || '0.0.0.0';
const backendPort = process.env.BACKEND_PORT || '5555';

// Define a simple route
app.get('/', (req, res) => {
  res.send('Love and flowers, PXL!');
});

// Start the server
app.listen(backendPort, backendNetwork, () => {
  logger.info(`Starting wholesome backend server with love on ${backendNetwork} port ${backendPort}`);
});
