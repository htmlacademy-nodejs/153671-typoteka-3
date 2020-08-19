'use strict';

const {Router} = require(`express`);
const articlesRoutes = Router();
const {pageContentPost, pageContentNewPost, pageContentEditPost, pageContentCategory} = require(`../mock`);

articlesRoutes.get(`/category/:id`, (req, res) => res.render(`articles/articles-by-category`, pageContentCategory));
articlesRoutes.get(`/add`, (req, res) => res.render(`articles/new-post`, pageContentNewPost));
articlesRoutes.get(`/edit/:id`, (req, res) => res.render(`articles/new-post`, pageContentEditPost));
articlesRoutes.get(`/:id`, (req, res) => res.render(`articles/post`, pageContentPost));

module.exports = articlesRoutes;
