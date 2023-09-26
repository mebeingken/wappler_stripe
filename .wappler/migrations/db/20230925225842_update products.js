
exports.up = function(knex) {
  return knex.schema
    .table('products', async function (table) {
      table.renameColumn('price', 'amount');
      table.string('title');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('products', async function (table) {
      table.renameColumn('amount', 'price');
      table.dropColumn('title');
    })
};
