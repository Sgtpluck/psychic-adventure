App.ApplicationRoute = Ember.Route.extend({
  beforeModel: function () {
    localStorage.removeItem("cartId");
    if (typeof(localStorage.cartId) === "undefined") {
      var cart = this.store.createRecord("cart");
      localStorage.cartId = cart.get("id");
    }
  },
  model: function () {
    return this.store.find("cart", localStorage.cartId)
  }
});
