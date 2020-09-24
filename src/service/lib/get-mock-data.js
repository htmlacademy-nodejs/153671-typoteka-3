'use strict';

const fs = require(`fs`).promises;
const {logger} = require(`../lib/logger`);
const FILENAME = `mocks.json`;
let data = null;

const getMockData = async () => {
  if (data !== null) {
    return Promise.resolve(data);
  }

  try {
    const fileContent = await fs.readFile(FILENAME);
    data = JSON.parse(fileContent);
  } catch (err) {
    logger.info(err);
    return Promise.reject(err);
  }

  return Promise.resolve(data);
};

(async () => {
  try {
    const fileContent = await fs.readFile(FILENAME);
    data = JSON.parse(fileContent);
  } catch (err) {
    logger.info(err);
  }
})();

module.exports = getMockData;
