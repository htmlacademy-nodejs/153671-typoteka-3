'use strict';

const {Router} = require(`express`);
const myRoutes = Router();

myRoutes.get(`/`, (req, res) => res.send(`/my`));
myRoutes.get(`/comments`, (req, res) => res.send(`/my/comments`));

module.exports = myRoutes;
