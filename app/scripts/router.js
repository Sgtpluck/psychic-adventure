App.Router.map(function(){
  this.resource("admin", function () {
    this.resource("productEdit", { path: ":product_id"});
    this.resource("productNew", {path: "products/new"} );
  });
  this.resource('adminOrders', { path: 'admin/orders'}, function() {
    this.resource("manageOrders", { path: ':order_id' } );
  });
  this.resource("cart");
  this.resource("order");
  this.resource("confirmation", { path: 'order/:order_id'});
  this.resource("products", { path: "/" }, function () {
    this.resource("product", { path: ":product_id" });
  });
});
