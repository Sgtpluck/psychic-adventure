App.ProductRoute = Ember.Route.extend({
  actions: {
    addToCart: function(unique_prod) {
      var theCart = this.modelFor("application");
      var newItem = this.store.createRecord('item', {
                                cart: theCart,
                                product: unique_prod,
                                quantity: 1,
                                currentPrice: unique_prod.get('price')
                              });
      newItem.save().then(function (theCart, newItem) {
        theCart.get("items").then(function(items) {
          items.pushObject(newItem);
        });
      });
    },
  },
  model: function (params) {
    return this.store.find("product", params.product_id);
  }
});
