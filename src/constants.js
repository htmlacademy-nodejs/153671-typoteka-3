'use strict';
const DEFAULT_PORT = 3000;
module.exports.DEFAULT_COMMAND = `--help`;
module.exports.USER_ARGV_INDEX = 2;
module.exports.MAX_ID_LENGTH = 6;
module.exports.API_PREFIX = `/api`;
module.exports.DEFAULT_PORT = DEFAULT_PORT;
module.exports.API_URL = `http://localhost:${DEFAULT_PORT}`;

module.exports.ExitCode = {
  error: 1,
  success: 0,
};

module.exports.HttpCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  FORBIDDEN: 403,
  INTERNAL_SERVER_ERROR: 500,
};
