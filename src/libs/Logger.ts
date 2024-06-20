import pino from 'pino';

// Define logger options
const options: pino.LoggerOptions = {
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug', // Adjust as needed
//   prettyPrint: { colorize: true },
  // Add any other options here
};

// Create a Pino logger instance
const logger = pino(options);

export default logger;