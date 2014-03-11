App.Item = DS.Model.extend({
  product: DS.belongsTo('products', {async: true }),
  cart: DS.belongsTo('carts', {async: true }),
  quantity: DS.attr("integer")
});

App.Item.FIXTURES = [
  {
    id: 1,
    product: 1,
    cart: 1,
    quantity: 1
  }
]