App.Product = DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  price: DS.attr("number"),
  image: DS.attr("string"),
  avatar: DS.attr("string"),
  item: DS.belongsTo('item', {async: true })
});

App.Product.FIXTURES = [
  {
    id: 1,
    name: "Financial",
    description: "Are you worried about your financial future? Do you want to know what is in store for you, but are you too smart to spend a lot of money trying to figure it out? Let us help ease your mind by telling you all about the fortunes that are about to fall into your lap, for a low, low price.",
    price: 100000,
    image: "http://upload.wikimedia.org/wikipedia/commons/f/f9/Money_Cash.jpg",
    avatar: "http://petswithstyleboutique.com/images/thumbnails/DollarSignSV.jpg"
  }, {
    id: 2,
    name: "Romantic",
    description: "Have you been looking for love in all the wrong places? We can help you pinpoint exactly where you've been going wrong in all your romantic endeavers. It'll cost you, but whoever said that love came cheap?",
    price: 500000,
    image: "http://www.thebuccaneer.com/photos09/09-romance-2013-760.jpg",
    avatar: "http://www.acclaimclipart.com/gifart_topics/topic_Misc/tn_heart7-Love%20and%20Romance-Love%20and%20Romance-9_0303-0800-1451.gif"
  }
];