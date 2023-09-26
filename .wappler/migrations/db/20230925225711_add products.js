
exports.up = function(knex) {
  return knex.schema
    .createTable('products', async function (table) {
      table.increments('primary_id');
      table.string('product_id');
      table.decimal('price');
    })
    .then(async () => {
      await knex('products').insert({"product_id":"11-1111","price":"11"}),
      await knex('products').insert({"product_id":"22-2222","price":"22"}),
      await knex('products').insert({"product_id":"33-3333","price":"33"})
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('products')
};
