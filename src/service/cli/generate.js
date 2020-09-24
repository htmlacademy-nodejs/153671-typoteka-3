'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);

const {getRandomInt, shuffle} = require(`../../utils`);
const {ExitCode, MAX_ID_LENGTH} = require(`../../constants`);
const {logger} = require(`../lib/logger`);
const {nanoid} = require(`nanoid`);

const DEFAULT_COUNT = 1;
const MAX_COUNT = 1000;
const FILE_NAME = `mocks.json`;
const MAX_COMMENTS = 4;

const FILE_SENTENCES_PATH = `./data/sentences.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;
const FILE_COMMENTS_PATH = `./data/comments.txt`;

const Time = {
  MS: 1000,
  SECONDS: 60,
  MINUTES: 60,
  HOURS: 24,
  DAYS_LIMIT: 90,
};

const DateLimits = {
  min: Date.now() - Time.SECONDS * Time.MINUTES * Time.HOURS * Time.DAYS_LIMIT * Time.MS,
  max: Date.now(),
};

const generateComments = (count, comments) => (
  Array(count).fill({}).map(() => ({
    id: nanoid(MAX_ID_LENGTH),
    text: shuffle(comments)
      .slice(0, getRandomInt(1, 3))
      .join(` `),
  }))
);

const generateArticles = (count, titles, categories, sentences, comments) =>
  Array(count)
    .fill({})
    .map(() => ({
      id: nanoid(MAX_ID_LENGTH),
      title: titles[getRandomInt(0, titles.length - 1)],
      announce: shuffle(sentences).slice(0, 5).join(` `),
      fullText: shuffle(sentences).slice(0, 10).join(` `),
      createdDate: new Date(getRandomInt(DateLimits.min, DateLimits.max)),
      category: shuffle(categories).slice(0, 3),
      comments: generateComments(getRandomInt(1, MAX_COMMENTS), comments),
    }));

const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.split(`\n`);
  } catch (e) {
    logger.info(chalk.red(e));
    return [];
  }
};

module.exports = {
  name: `--generate`,
  async run(args) {
    const [count] = args;
    if (count !== undefined && isNaN(count)) {
      logger.info(chalk.red(`В качестве параметра необходимо ввести число.`));
      process.exit(ExitCode.error);
    }

    const countArticle = Number(count) || DEFAULT_COUNT;
    if (countArticle > MAX_COUNT) {
      logger.info(chalk.red(`Не больше 1000 публикаций.`));
      process.exit(ExitCode.error);
    }

    const [titles, categories, sentences, comments] = await Promise.all([
      readContent(FILE_TITLES_PATH),
      readContent(FILE_CATEGORIES_PATH),
      readContent(FILE_SENTENCES_PATH),
      readContent(FILE_COMMENTS_PATH),
    ]);
    const content = JSON.stringify(generateArticles(countArticle, titles, categories, sentences, comments));

    try {
      await fs.writeFile(FILE_NAME, content);
      logger.info(chalk.green(`Операция выполнена успешно. Файл создан.`));
    } catch (err) {
      logger.error(chalk.red(`Невозможно записать данные в файл.`));
    }

  },
};
