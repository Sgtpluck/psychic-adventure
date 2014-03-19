App.OrderRoute = Ember.Route.extend({
  actions: {
    submitBilling: function (attributes) {
      var order = this.store.createRecord('order', attributes);
      var cart = this.modelFor("application")
      order.set('cart', cart)
      var self = this;
      order.save().then(
        function (order) {
        self.transitionTo('confirmation', order).then( function () {
          var cart = self.store.createRecord("cart");
          cart.save().then(function (cart) {
            localStorage.cartId = cart.id;
            debugger
         });
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