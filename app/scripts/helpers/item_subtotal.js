Ember.Handlebars.helper('item-subtotal', function(price, quantity) {
  return (price * quantity) / 100;
});