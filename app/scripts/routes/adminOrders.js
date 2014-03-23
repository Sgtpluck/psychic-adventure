App.AdminOrdersRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("order");
  }
});