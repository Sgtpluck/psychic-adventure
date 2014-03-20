App.CartRoute = Ember.Route.extend({
   actions: {
    more: function (item) {
      var cart = this.modelFor("application")
      item.incrementProperty("quantity");
      item.set("cart", cart);
      item.save();
    },
    less: function (item) {
      var cart = this.modelFor("application")
      if (item.get('quantity') > 0) {
        item.decrementProperty('quantity');
        item.set("cart", cart);
      }
      item.save();
    },
    removeFromCart: function (item) {
      cart = this.modelFor("application")
      cart.get("items").then( function(items) {
        items.removeObject(item);
      });
      item.deleteRecord();
      item.save();
    }
  },
  model: function (params) {
    return this.store.find("cart", localStorage.cartId);
  }
});