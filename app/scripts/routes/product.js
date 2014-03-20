App.ProductRoute = Ember.Route.extend({
  actions: {
    addToCart: function(unique_prod) {
      var store = this.store
      var theCart = this.modelFor("application");
      theCart.get("items").then(function (items) {
        return items.find(function (item) {
          return item.get("product").get("id") == unique_prod.get("id")
        });
      }).then(function (item) {
        if (item) {
          item.incrementProperty("quantity");
          item.set("cart", theCart);
          item.save();
        } else {
          var item = store.createRecord('item', {
            cart: theCart,
            product: unique_prod,
            quantity: 1,
            currentPrice: unique_prod.get('price')
          });
          item.save().then( function() {
            theCart.get("items").pushObject(item)
          });
          }
      });
    },
  },
  model: function (params) {
    return this.store.find("product", params.product_id);
  }
});
