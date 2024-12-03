const knex = require("knex");
const config = require("./knexfile.js");
const db = knex(config.development);
module.exports = db;
// to make the migration with the custome knex file u have to run the migration command as npx knex --knexfile = <customefilename.js> migrate:make create_table