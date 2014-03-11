App.CartRoute = Ember.Route.extend({
  return this.store.find("items")
});