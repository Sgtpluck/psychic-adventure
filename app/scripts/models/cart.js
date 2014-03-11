App.Cart = DS.Model.extend({
  items: DS.hasMany('items', {async: true }),
});

App.Cart.FIXTURES = [
  {
    id: 1,
    items: [1]
  }
]