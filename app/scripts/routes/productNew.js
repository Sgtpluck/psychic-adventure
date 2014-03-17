App.ProductNewRoute = Ember.Route.extend({
  model: function () {
    return {};
    // proxy = Ember.ObjectProxy.create({
    //   name: 'this is a proxy',
    //   description: null,
    //   price: null,
    //   avatar: null,
    //   image: null 
    // });
    // return this.store.createRecord("product")
  },
  actions: {
    createProduct: function (proxy) {
      newProduct = this.store.createRecord("product", proxy);
      // {
      //     name: proxy.get('name'),
      //     description: proxy.get('description'),
      //     price: proxy.get('price'),
      //     avatar: proxy.get('avatar'),
      //     image: proxy.get('image')
      //   })
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