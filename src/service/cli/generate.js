'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);

const {getRandomInt, shuffle} = require(`../../utils`);
const {ExitCode} = require(`../../constants`);

const DEFAULT_COUNT = 1;
const MAX_COUNT = 1000;
const FILE_NAME = `mocks.json`;

const FILE_SENTENCES_PATH = `./data/sentences.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;

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


const generateOffers = (count, titles, categories, sentences) =>
  Array(count)
    .fill({})
    .map(() => ({
      title: titles[getRandomInt(0, titles.length - 1)],
      announce: shuffle(sentences).slice(0, 5).join(` `),
      fullText: shuffle(sentences).slice(0, 10).join(` `),
      createdDate: new Date(getRandomInt(DateLimits.min, DateLimits.max)),
      category: shuffle(categories).slice(0, 3),
    }));

const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.split(`\n`);
  } catch (e) {
    console.log(chalk.red(e));
    return [];
  }
};

module.exports = {
  name: `--generate`,
  async run(args) {
    const [count] = args;

    if (count !== undefined && isNaN(count)) {
      console.log(chalk.red(`В качестве параметра необходимо ввести число.`));
      process.exit(ExitCode.error);
    }

    const countOffer = Number(count) || DEFAULT_COUNT;

    if (countOffer > MAX_COUNT) {
      console.log(chalk.red(`Не больше 1000 публикаций.`));
      process.exit(ExitCode.error);
    }

    const [titles, categories, sentences] = await Promise.all([
      readContent(FILE_TITLES_PATH),
      readContent(FILE_CATEGORIES_PATH),
      readContent(FILE_SENTENCES_PATH),
    ]);

    const content = JSON.stringify(generateOffers(countOffer, titles, categories, sentences));

    try {
      await fs.writeFile(FILE_NAME, content);
      console.log(chalk.green(`Операция выполнена успешно. Файл создан.`));
    } catch (err) {
      console.error(chalk.red(`Невозможно записать данные в файл.`));
    }

  },
};
