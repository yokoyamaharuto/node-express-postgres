/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('users').then(function(exists) {
        if (!exists) {
            return knex.schema.createTable('users', function(t) {
                t.increments('id').primary().unsigned().notNullable();
                t.string('name').unique();
                t.string('password');
            });
        }else{
            return new Error("The table already exists");
        }
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable('users').then(function(exists) {
        if (exists) {
            return knex.schema.dropTable('users');
        }
    });
};
