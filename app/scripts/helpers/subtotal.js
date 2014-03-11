Ember.Handlebars.helper('subtotal', function(price, quantity) {
  return (price * quantity) / 100;
});