'use strict';

const {Router} = require(`express`);
const myRoutes = Router();
const {pageContentMy, pageContentMyComments} = require(`../mock`);

myRoutes.get(`/`, (req, res) => res.render(`my/my`, pageContentMy));
myRoutes.get(`/comments`, (req, res) => res.render(`my/comments`, pageContentMyComments));

module.exports = myRoutes;
