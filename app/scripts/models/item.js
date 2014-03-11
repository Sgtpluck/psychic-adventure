App.Item = DS.Model.extend({
  product: DS.belongsTo('product', {async: true }),
  quantity: DS.attr("integer")
});

App.Item.FIXTURES = [
  {
    id: 1,
    product: 1,
    quantity: 1
  },
    {
    id: 2,
    product: 2,
    quantity: 1
  }
]