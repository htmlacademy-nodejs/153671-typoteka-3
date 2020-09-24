'use strict';

const pino = require(`pino`);
const multistream = require(`pino-multi-stream`).multistream;
const path = require(`path`);
const fs = require(`fs-extra`);
const appDir = path.dirname(require.main.filename);

const PATH_LOGS_DIR = appDir + `/logs`;
const PATH_LOGS_FILE = PATH_LOGS_DIR + `logs.txt`;

if (!fs.existsSync(PATH_LOGS_DIR)) {
  fs.mkdirSync(PATH_LOGS_DIR);
}
fs.ensureFileSync(PATH_LOGS_FILE);

const level = process.env.LOG_LEVEL || `info`;
const streams = [
  {level, stream: process.stdout},
  {level, stream: fs.createWriteStream(PATH_LOGS_FILE)},
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
