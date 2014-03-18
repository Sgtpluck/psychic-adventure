App.ApplicationRoute = Ember.Route.extend({
  // localStorage.removeItem("cartId");
  beforeModel: function () {
    if (typeof(localStorage.cartId) === "undefined") {
      var cart = this.store.createRecord("cart", {})
      cart.save().then(
        function (cart) {
      localStorage.cartId = cart.get("id");
    });
    }
  },
  model: function () {
    // return this.store.createRecord("cart", {});
    return this.store.find("cart", localStorage.cartId);
  }
});
