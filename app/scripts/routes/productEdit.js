App.ProductEditRoute = Ember.Route.extend({
  actions: {
    saveProduct: function (product) {
      product.save()
      this.transitionTo('admin')
    }
  },
  model: function (params) {
    return this.store.find("product", params.product_id);
  }
});