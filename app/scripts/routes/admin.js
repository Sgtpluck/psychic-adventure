App.AdminRoute = Ember.Route.extend({
  actions: {
    deleteProduct: function (product) {
      product.deleteRecord();
      product.save();
    }
  },
  model: function () {
    return this.store.find("product");
  }
});