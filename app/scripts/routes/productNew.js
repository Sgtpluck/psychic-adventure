App.ProductNewRoute = Ember.Route.extend({
  model: function () {
    return this.store.createRecord("product")
  },
  actions: {
    createProduct: function (product) {
      product.save;
    }
  }
});