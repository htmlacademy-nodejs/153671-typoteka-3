'use strict';

const {Router} = require(`express`);
const myRoutes = Router();

myRoutes.get(`/`, (req, res) => res.render(`pages/my`));
myRoutes.get(`/comments`, (req, res) => res.render(`pages/comments`));

module.exports = myRoutes;
