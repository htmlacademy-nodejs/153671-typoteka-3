'use strict';

const {Router} = require(`express`);
const articlesRoutes = Router();

articlesRoutes.get(`/category/:id`, (req, res) => res.send(`/articles/category/${req.params.id}`));
articlesRoutes.get(`/add`, (req, res) => res.send(`/articles/add`));
articlesRoutes.get(`/edit/:id`, (req, res) => res.send(`/articles/edit/${req.params.id}`));
articlesRoutes.get(`/:id`, (req, res) => res.send(`/articles/${req.params.id}`));

module.exports = articlesRoutes;
