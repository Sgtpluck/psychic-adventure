App.Cart = DS.Model.extend({
  items: DS.hasMany("item", { async: true }),
  total: function(){
    var items = this.get('items');
    var prices = items.map(function(item){
      return item.get('subtotal')
    });
    var sum = prices.reduce(function(previousValue, currentValue){
      return previousValue + currentValue
    }, 0);
    return sum
  }.property('items.@each.subtotal')
});

App.Cart.FIXTURES = [
  {
    id:     1,
    items: [1, 2]
  }
]

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
