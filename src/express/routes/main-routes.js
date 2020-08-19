'use strict';

const {Router} = require(`express`);
// eslint-disable-next-line new-cap
const mainRouter = Router();
const {
  pageContentMain,
  pageContentAllCategories,
  pageContentSearch,
  pageContentRegister,
  pageContentLogin
} = require(`../mock`);

mainRouter.get(`/`, (req, res) => res.render(`main`, pageContentMain));
mainRouter.get(`/register`, (req, res) => res.render(`auth/sign-up`, pageContentRegister));
mainRouter.get(`/login`, (req, res) => res.render(`auth/login`, pageContentLogin));
mainRouter.get(`/search`, (req, res) => res.render(`search`, pageContentSearch));
mainRouter.get(`/categories`, (req, res) => res.render(`all-categories`, pageContentAllCategories));

module.exports = mainRouter;
