App.Router.map(function(){
  this.route("home", { path: "/" });
  this.resource("admin", function () {
    this.resource("product", { path: "/edit/:product_id" } );
  });
  this.resource("cart");
  this.resource("products", function () {
    this.resource("product", { path: ":product_id" });
  });
});