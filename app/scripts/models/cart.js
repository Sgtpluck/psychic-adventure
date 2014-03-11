App.Cart = DS.Model.extend({
  items: DS.hasMany('item', {async: true }),
});

App.Cart.FIXTURES = [
  {
    id: 1,
    items: [1,2]
  }
]