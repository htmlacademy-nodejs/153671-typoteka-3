'use strict';

const {Router} = require(`express`);
const articlesRoutes = Router();

articlesRoutes.get(`/category/:id`, (req, res) => res.render(`pages/all-categories`));
articlesRoutes.get(`/add`, (req, res) => res.render(`pages/new-post`));
articlesRoutes.get(`/edit/:id`, (req, res) => res.render(`pages/new-post`));
articlesRoutes.get(`/:id`, (req, res) => res.render(`pages/all-categories`));

module.exports = articlesRoutes;
