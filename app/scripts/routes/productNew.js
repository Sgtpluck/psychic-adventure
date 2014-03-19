App.ProductNewRoute = Ember.Route.extend({
  model: function () {
    return {};
  },
  actions: {
    createProduct: function (proxy) {
      newProduct = this.store.createRecord("product", proxy);
      var self = this
      newProduct.save().then(
        function () {
          self.transitionTo("admin");
        },
        function (error) {
          alert(error.responseText);
          newProduct.deleteRecord();
        }
        );
    }
  }
});