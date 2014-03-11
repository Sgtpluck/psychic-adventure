App.CartRoute = Ember.Route.extend({
   actions: {
    more: function (item) {
      console.log(item)
      item.incrementProperty("quantity");  
    },
    less: function (item) {
      item.decrementProperty('quantity');   
    }
  },
  model: function (params) {
    return this.store.find("cart", 1);
  }
});