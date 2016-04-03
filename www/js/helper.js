/**
 * Created by romuald on 03/04/2016.
 */
/* Pizzas */
function showAll(pizzasMkd) {
  var principal = document.getElementById("principal");
  var divPizzaPrincipal = document.createElement("div");
  divPizzaPrincipal.setAttribute("id", "divPizzas");
  var divPizzas = document.createElement("div");
  for(var i in pizzasMkd) {
    var div = document.createElement("div");
    div.setAttribute("class", "pizza col-25");
    var a = document.createElement("a");
    a.setAttribute("ng-click", "getPizza()");
    var img = document.createElement("img");
    img.setAttribute("src", "img/pizzas/"+pizzasMkd[i].img);
    a.appendChild(img);
    var h4 = document.createElement("h4");
    h4.innerHTML = pizzasMkd[i].name
    div.appendChild(a);
    div.appendChild(h4);
    divPizzas.appendChild(div);
    /* Add Row */
    if((parseInt(i)+1)%4 == 0) {
      divPizzas.setAttribute("class", "row");
      divPizzaPrincipal.appendChild(divPizzas);
      divPizzas = document.createElement("div");
    }
  }
  divPizzas.setAttribute("class", "row");
  divPizzaPrincipal.appendChild(divPizzas);
  principal.insertBefore(divPizzaPrincipal, document.getElementById('button'));
}

/* Add category to pizza */
