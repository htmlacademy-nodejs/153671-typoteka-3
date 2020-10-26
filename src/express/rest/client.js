'use strict';
const axios = require(`axios`);
const {API_URL, API_PREFIX} = require(`../../constants`);
const client = axios.create({
  baseURL: API_URL + API_PREFIX,
  timeout: 1000,
});

module.exports = {client};
