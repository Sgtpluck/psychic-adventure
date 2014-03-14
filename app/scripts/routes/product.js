App.ProductRoute = Ember.Route.extend({
  actions: {
    addToCart: function(unique_prod) {
      var theCart = this.controllerFor('cart').get('model');
      var newItem = this.store.createRecord('item', { cart: theCart, product: unique_prod, quantity: 1 });
      newItem.save();
      console.log(newItem)
      theCart.get("items").then(function(items) { 
        items.pushObject(newItem);
      }
    )},
  },
  model: function (params) {
    return this.store.find("product", params.product_id);
  },
  setupController: function(controller, model) {
    this.controllerFor('cart').set('model', this.store.find('cart', 1));
    controller.set('model', model);
  },
});
