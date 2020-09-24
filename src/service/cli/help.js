'use strict';

const chalk = require(`chalk`);
const {logger} = require(`../lib/logger`);

module.exports = {
  name: `--help`,
  run() {
    const text = `
    Программа запускает http-сервер и формирует файл с данными для api.

    Гайд:
      server <command>

      Команды:

      --version:            выводит номер версии
      --help:               печатает этот текст
      --generate <count>    формирует файл mocks.json
    `;

    logger.info(chalk.grey(text));
  }
};
