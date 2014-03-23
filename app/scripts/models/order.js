App.Order = DS.Model.extend({
  customerName:  DS.attr("string"),
  email:         DS.attr("string"),
  status:        DS.attr("string"),
  creditcard:    DS.attr("string"),
  cvv:           DS.attr("string"),
  zip:           DS.attr("string"),
  expDate:       DS.attr("string"),
  cart:          DS.belongsTo("cart", {async: true}),
  createdAt:     DS.attr("date")
});
