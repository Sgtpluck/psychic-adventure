App.OrderRoute = Ember.Route.extend({
  actions: {
    submitBilling: function (attributes) {
      var order = this.store.createRecord('order', attributes);
      var self = this;
      order.save().then(
        function (order) {
        self.transitionTo('confirmation', order);
        localStorage.removeItem("cartId");
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