'use strict';

const {Router} = require(`express`);
const mainRouter = Router();

mainRouter.get(`/`, (req, res) => res.render(`pages/index`));
mainRouter.get(`/register`, (req, res) => res.render(`pages/register`));
mainRouter.get(`/login`, (req, res) => res.render(`pages/register`));
mainRouter.get(`/search`, (req, res) => res.render(`pages/search`));
mainRouter.get(`/categories`, (req, res) => res.render(`pages/all-categories`));

module.exports = mainRouter;
