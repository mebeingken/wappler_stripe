
exports.up = function(knex) {
  return knex.schema
    .createTable('sellers', async function (table) {
      table.increments('seller_id');
      table.string('stripe_account_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('sellers')
};
