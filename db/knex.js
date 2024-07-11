// Update with your config settings.

const environment = "development";
const config = require("../knexfile.js")[environment];
const knex = require("knex")(config);
const knex = require('../db/knex');

module.exports = knex;

