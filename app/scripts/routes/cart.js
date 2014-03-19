App.CartRoute = Ember.Route.extend({
   actions: {
    more: function (item) {
      item.incrementProperty("quantity");
    },
    less: function (item) {
      if (item.get('quantity') > 0) {
        item.decrementProperty('quantity');  
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
    return this.modelFor("application")
  }
});