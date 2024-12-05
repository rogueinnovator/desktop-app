/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("users", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("cnic").notNullable();
      table.decimal("phone_no");
      table.string("plate_no").notNullable();
      table.string("address");
      table.float("payment").notNullable();
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("users");
  };
  //to run the up function u need to run `npx knex  mirgate:latest`
  // to get make a new user table (first run of migration) u need to run `npx knex migrate:make <table_name>` this will create a new table in the migrations
  