'use strict';

const fs = require(`fs`);
const pino = require(`pino`);
const multistream = require(`pino-multi-stream`).multistream;
const path = require(`path`);
const appDir = path.dirname(require.main.filename);

const level = process.env.LOG_LEVEL || `info`;
const streams = [
  {level, stream: process.stdout},
  {level, stream: fs.createWriteStream(appDir + `/logs/logs.txt`)},
];
const logger = pino({
  name: `api-service`,
  safe: true,
  prettyPrint: {
    colorize: true,
  },
}, multistream(streams));

module.exports = {
  logger,
  getLogger(options = {}) {
    return logger.child(options);
  },
};
