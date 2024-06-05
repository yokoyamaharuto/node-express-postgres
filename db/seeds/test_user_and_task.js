/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('tasks').del()
  await knex('users').insert([
    {id: 1, name: 'user01', password: 'password'}
  ]);
  await knex('tasks').insert([
    {id: 1, user_id: 1, content: 'テスト'}
  ]);
};
