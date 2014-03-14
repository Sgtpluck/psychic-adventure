App.CartRoute = Ember.Route.extend({
   actions: {
    more: function (item) {
      item.incrementProperty("quantity");
    },
    less: function (item) {
      if (item.get('quantity') > 0) {
        item.decrementProperty('quantity');  
      } 
    }
  },
  model: function (params) {
    return this.store.find("cart", 1);
  }
});