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
      if (item.get('quantity') > 1) {
        item.decrementProperty('quantity');
        item.set("cart", cart);
      }
      else {
        item.deleteRecord()
        item.save()
        cart.get("items").then( function(items) {
        items.removeObject(item);
      });
      }
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