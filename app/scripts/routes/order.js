App.OrderRoute = Ember.Route.extend({
  actions: {
    submitBilling: function (attributes) {
      var order = this.store.createRecord('order', attributes);
      var self = this;
      this.controllerFor("application").get("cart").then ( function (cart) {
        order.set('cart', cart)
        order.save().then( function (order) {

          var cart = self.store.createRecord("cart");
          cart.save().then( function (cart) {
            localStorage.cartId = cart.id;
            self.controllerFor("application").set("cart", self.store.find("cart", localStorage.cartId));
             })
          self.transitionTo('confirmation', order)
        });
      },
      function (error) {
        alert('There was a problem processing your order');
      })
    }
  },
  model: function () {
    return {};
  }
});