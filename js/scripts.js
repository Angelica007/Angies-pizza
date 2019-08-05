function myFunction() {
    var x = document.getElementById("myCheck");
    x.checked = true;
  }
  function Order(size, crusts, toppings) {
    this.size = size;
    this.crusts = crusts;
    this.toppings = toppings;
  }
  Order.prototype.fullOrder = function() {
    return this.size + ", " + this.crusts + ", " + this.toppings;
  }