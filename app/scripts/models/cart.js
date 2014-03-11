App.Cart = DS.Model.extend({
  items: DS.hasMany("item", { async: true })
  });
//   subtotal: function() {
//     var subtotal = 0;

//     var items = this.get('items');
//     items.then(function(items) {
//       items.forEach(function(item) {
//         subtotal += item.get('quantity') * item.get('current_price');
//       });
//     });

//     console.log(subtotal);
//     return subtotal;
//   }.property('items')
// });
    // (var item in items) {
    //   console.log(item);
    //   subtotal += item.quantity * item.current_price;
    // }

App.Cart.FIXTURES = [
  {
    id:     1,
    items: [1, 2]
  }
]