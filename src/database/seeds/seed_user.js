/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users")
    .del()
    .then(() => {
      return knex("users").insert([
        { name: "huzaifa", email: "thisisemail" },
        { name: "sehba", email: "thisemail2" },
      ]);
    });
};
