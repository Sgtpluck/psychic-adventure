App.ProductRoute = Ember.Route.extend({
  actions: {
    add_to_cart: function(unique_prod) {
      console.log(unique_prod.get("name"));
    }
  },
  model: function (params) {
    return this.store.find("product", params.product_id);
  }
})