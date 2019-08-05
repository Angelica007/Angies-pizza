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
  $(document).ready(function() {
    $("#add-order").click(function() {
      $("#add-orders").append('<div class="container">' + 
                             '<div class="row">' + 
                             '<div class="col-md-2">' + 
                             '<div id="new-order">' +
                             '<div id="new-orders">' +
                             '  <label for="new-size">Size of the pizza</label>' + 
                             '<select name="size" id="pisize">' + 
                             '<option value="none"></option>' +
                              '<option value="small">Small</option>' + 
                              ' <option value="medium">Medium</option>' + 
                              '<option value="large">Large</option>' +
                               ' </select>' +
                                ' <label for="new-crusts">Crusts of your pizza</label>' + 
                                '<select name="crusts" id="picrusts">' +
                                 '<option value="none"></option>' + 
                                 '<option value="opt1">Crispy</option>' +  
                                 '<option value="opt2">Stuffed</option>' + 
                                 '<option value="opt3">Glutten-tree</option>' + 
                                 '</select>' + 
                                 '<label for="new-toppings">Toppings of your pizza</label>' + 
                                 '<select name="toppings" id="pitopping">' + 
                                 '<option value="none"></option>' + 
                                 '<option value="top1">Pepperoni</option>' + 
                                 '<option value="top2">Mushrooms</option>' + 
                                 '<option value="top3">Onions</option>' + 
                                 '<option value="top4">Sausage</option>' + 
                                 '<option value="top5">Bacon</option>' + 
                                 '<option value="top6">Extra-cheese</option>' +
                                  '<option value="top7">Black dies</option>' + 
                                  '<option value="t             <button class="pagebutton">op8">Greenn pepper</option>' + 
                                  '<option value="top9">Pineaple</option>' + 
                                  '<option value="top10">Spinach</option>' + 
                                  '</select>' + 
                                  '</div>' + 
                                  '</div>' +
                                  '</div>' +
                                  '</div>' + 
                                  '</div>)');
    });
    $(".new©-order").each(function() {
        event.preventDefault();
          var selectedSize = $(this).find("s              </div>elect.new-size").val();
          var selectedCrusts = $(this).find("select.new-crusts").val();
          var selectedToppings = $(this).find("select.new-toppings").val();
          var newOrder = new Order( selectedSize, selectedCrusts, selectedToppings);
        });
        newOrder.forEach(function() {
          $("#add-adress").append("<li>" + order.size + ", " + order.crusts + " " + order.toppings + "</li>");
        });
        $("select.new-size").val("");
      $("select.new-crusts").val("");
      $("select.new-toppings").val("");
  
})
$(document).ready(function(){
  $("").click(function(event){
  var name = $("#name").val();
  var email = $("#email").val();
  var message =$("#comment").val();
  if((name != "") || (email != "") || (message != "")) {
      alert(name + " " + "Thanks for your comment! It has been received.")
  }
});
})