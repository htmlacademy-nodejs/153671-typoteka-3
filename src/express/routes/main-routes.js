'use strict';

const {Router} = require(`express`);
// eslint-disable-next-line new-cap
const mainRouter = Router();
const Article = require(`../rest/Article`);
const Search = require(`../rest/Search`);
const {
  pageContentMain,
  pageContentAllCategories,
  pageContentSearch,
  pageContentRegister,
  pageContentLogin
} = require(`../mock`);

mainRouter.get(`/`, async (req, res) => {
  pageContentMain.postList = await Article.findAll();
  res.render(`main`, pageContentMain);
});
mainRouter.get(`/register`, (req, res) => res.render(`auth/sign-up`, pageContentRegister));
mainRouter.get(`/login`, (req, res) => res.render(`auth/login`, pageContentLogin));
mainRouter.get(`/search`, async (req, res) => {
  try {
    const {search} = req.query;
    pageContentSearch.searchList = await Search.searchByArticle(search);
    res.render(`search`, pageContentSearch);
  } catch (error) {
    pageContentSearch.searchList = [];
    res.render(`search`, pageContentSearch);
  }
});
mainRouter.get(`/categories`, (req, res) => res.render(`all-categories`, pageContentAllCategories));


module.exports = mainRouter;
