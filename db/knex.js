// Update with your config settings.

const environment = "development";
const config = require("../knexfile.js")[environment];
const knex = require("knex")(config);

module.exports = knex;

module.exports = {

    development: {
      client: "mysql",
      connection: {
        database: "todo_app",
        user: "root",
        password: "postgres",
      },
      pool: {
        min: 2,
        max: 10
      },
    },
  
    staging: {
      client: "mysql",
      connection: {
        database: "todo_app",
        user: "root",
        password: "postgres",
      },
      pool: {
        min: 2,
        max: 10
      },
    },
  
    production: {
      client: "mysql",
      connection: {
        database: "todo_app",
        user: "root",
        password: "postgres",
      },
      pool: {
        min: 2,
        max: 10
      },
    }
  
  };