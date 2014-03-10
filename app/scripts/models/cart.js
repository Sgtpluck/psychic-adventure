App.Cart = DS.Model.extend({
  products: DS.hasMany('products'),
  subtotal: DS.attr("integer")
});