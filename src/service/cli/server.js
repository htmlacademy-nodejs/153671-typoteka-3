'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const express = require(`express`);

const {HttpCode, API_PREFIX} = require(`../../constants`);
const createApi = require(`../api`);
const {logger} = require(`../lib/logger`);

const DEFAULT_PORT = 3000;
const FILE_NAME = `mocks.json`;

const createApp = async () => {
  const app = express();

  app.use(express.json());
  app.use(API_PREFIX, await createApi());

  let fileContent;

  fs.access(`./${FILE_NAME}`)
    .then(async () => {
      fileContent = await fs.readFile(`./${FILE_NAME}`);
    })
    .catch(async () => {
      fileContent = JSON.stringify([]);
      await fs.writeFile(`./${FILE_NAME}`, fileContent);
    });

  app.get(`/posts`, (req, res) => {
    try {
      const mocks = JSON.parse(fileContent);
      res.json(mocks);
    } catch (err) {
      res.status(HttpCode.INTERNAL_SERVER_ERROR).send(err);
    }
  });


  app.use((req, res) => res
    .status(HttpCode.NOT_FOUND)
    .send(`Not found`));

  return app;
};

module.exports = {
  name: `--server`,
  async run(args) {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;
    const app = await createApp();

    try {
      app.listen(port, (err) => {
        if (err) {
          return logger.error(`Ошибка при создании сервера`, err);
        }
        logger.info(chalk.green(`Ожидаю соединений на ${port}`));
        return app;
      });
    } catch (err) {
      logger.error(`Произошла ошибка: ${err.message}`);
      process.exit(1);
    }
  },
  createApp,
};
