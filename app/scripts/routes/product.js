App.ProductRoute = Ember.Route.extend({
  actions: {
    addToCart: function(unique_prod) {
      var theCart = this.controllerFor('cart').get('model');
      var newItem = this.store.createRecord('item', { cart: theCart, product: unique_prod, quantity: 1 });
      theCart.get("items").then(function(items) {
        console.log()
        console.log(items.get('item'))
        console.log(newItem.get('product').get("name"))
        itemIndex = items.indexOf(newItem.get('product'));
        console.log(itemIndex)
        // })
        // if (itemIndex == -1) {
        //   newItem.save();
        //   console.log(newItem)
        //   items.pushObject(newItem);
        //   }
        // else {
        //   console.log('hello')
        // }
      }
    )}
  },
  model: function (params) {
    return this.store.find("product", params.product_id);
  },
  setupController: function(controller, model) {
    this.controllerFor('cart').set('model', this.store.find('cart', 1));
    controller.set('model', model);
  },
});

  // theCart.get("items").then(function(items) {
  //       item-index = items.indexOf(newItem)
  //       if (item-index === -1) {
  //         newItem.save();
  //         items.pushObject(newItem);
  //       }
  //       else {
  //         cart-item = items[item-index];
  //         console.log(cart-item);
  //       }
  //     })