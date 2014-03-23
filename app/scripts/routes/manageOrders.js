App.ManageOrdersRoute = Ember.Route.extend({
  actions: {
    markAsPaid: function(order) {
      var self = this
      order.set('status', 'sent')
      order.save().then( function () {
        self.transitionTo("manageOrders", order.id)
      })
    },
    cancel: function(order) {
      var self = this
      order.set('status', 'cancelled')
      order.save().then( function () {
        self.transitionTo("manageOrders", order.id)
      })
    }
  },
  model: function (params) {
    return this.store.find("order", params.order_id);
  }
});