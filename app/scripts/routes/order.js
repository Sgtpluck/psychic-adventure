App.OrderRoute = Ember.Route.extend({
  actions: {
    submitBilling: function (attributes) {
      var order = this.store.createRecord('order', attributes);
      var self = this;
      order.save().then(
        function (order) {
        self.transitionTo('confirmation', order);
      }, 
      function (error) {
        order.deleteRecord()
        alert(error.responseText);
      })
    }
  },
  model: function () {
    return {};
  }
});