App.Router.map(function(){
  this.route("home", { path: "/" });
  this.resource("cart");
  this.resource("products", function () {
    this.resource("product", { path: ":product_id" });
  });
});