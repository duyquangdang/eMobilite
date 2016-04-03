var commandes = JSON.parse('[{"id":"1","tbl_id":"1","user_id":"1","pizza_id":"0","bois_id":"0","dess_id":"0","pret":"0"},{"id":"2","tbl_id":"1","user_id":"1","pizza_id":"0","bois_id":"0","dess_id":"0","pret":"0"},{"id":"3","tbl_id":"1","user_id":"1","pizza_id":"0","bois_id":"0","dess_id":"0","pret":"0"},{"id":"5","tbl_id":"1","user_id":"1","pizza_id":"1","bois_id":"2","dess_id":"3","pret":"0"},{"id":"6","tbl_id":"1","user_id":"1","pizza_id":"5","bois_id":"6","dess_id":"7","pret":"0"},{"id":"7","tbl_id":"1","user_id":"1","pizza_id":"9","bois_id":"10","dess_id":"11","pret":"0"},{"id":"8","tbl_id":"1","user_id":"1","pizza_id":"13","bois_id":"14","dess_id":"15","pret":"0"},{"id":"9","tbl_id":"1","user_id":"1","pizza_id":"1","bois_id":"0","dess_id":"0","pret":"0"},{"id":"10","tbl_id":"1","user_id":"2","pizza_id":"21","bois_id":"22","dess_id":"23","pret":"0"},{"id":"11","tbl_id":"1","user_id":"2","pizza_id":"25","bois_id":"26","dess_id":"27","pret":"0"},{"id":"12","tbl_id":"1","user_id":"2","pizza_id":"29","bois_id":"30","dess_id":"31","pret":"0"},{"id":"13","tbl_id":"1","user_id":"2","pizza_id":"33","bois_id":"34","dess_id":"35","pret":"0"},{"id":"14","tbl_id":"1","user_id":"3","pizza_id":"1","bois_id":"2","dess_id":"3","pret":"0"},{"id":"15","tbl_id":"1","user_id":"3","pizza_id":"3","bois_id":"4","dess_id":"5","pret":"0"}]');
var pizzasMkd = JSON.parse('[{"id":"1","name":"Bacon Groovy","img":"baconGroovy.png","PIZMKD_ING1":"1","PIZMKD_ING2":"7","PIZMKD_ING3":"2","PIZMKD_ING4":"9","PIZMKD_ING5":"21"},{"id":"2","name":"Cannibale","img":"cannibale.png","PIZMKD_ING1":"21","PIZMKD_ING2":"1","PIZMKD_ING3":"7","PIZMKD_ING4":"5","PIZMKD_ING5":"22"},{"id":"3","name":"Divine Pepper","img":"divinePepper.png","PIZMKD_ING1":"1","PIZMKD_ING2":"3","PIZMKD_ING3":"4","PIZMKD_ING4":"5","PIZMKD_ING5":"0"},{"id":"4","name":"Extravaganzza","img":"extravaganzza.png","PIZMKD_ING1":"1","PIZMKD_ING2":"23","PIZMKD_ING3":"19","PIZMKD_ING4":"5","PIZMKD_ING5":"28"},{"id":"5","name":"Forestiere","img":"forestiere.png","PIZMKD_ING1":"1","PIZMKD_ING2":"12","PIZMKD_ING3":"2","PIZMKD_ING4":"19","PIZMKD_ING5":"6"},{"id":"6","name":"Original Moutarde","img":"originalMoutarde.png","PIZMKD_ING1":"1","PIZMKD_ING2":"2","PIZMKD_ING3":"6","PIZMKD_ING4":"7","PIZMKD_ING5":"8"},{"id":"7","name":"Pepperoni","img":"pepperoni.png","PIZMKD_ING1":"1","PIZMKD_ING2":"7","PIZMKD_ING3":"23","PIZMKD_ING4":"3","PIZMKD_ING5":"24"},{"id":"8","name":"4 fromages","img":"quatreFromages.png","PIZMKD_ING1":"1","PIZMKD_ING2":"15","PIZMKD_ING3":"24","PIZMKD_ING4":"27","PIZMKD_ING5":"0"},{"id":"9","name":"Raclette","img":"raclette.png","PIZMKD_ING1":"1","PIZMKD_ING2":"9","PIZMKD_ING3":"2","PIZMKD_ING4":"10","PIZMKD_ING5":"11"},{"id":"10","name":"Saumoneta","img":"saumoneta.png","PIZMKD_ING1":"1","PIZMKD_ING2":"2","PIZMKD_ING3":"13","PIZMKD_ING4":"25","PIZMKD_ING5":"26"},{"id":"11","name":"Savoyarde","img":"savoyarde.png","PIZMKD_ING1":"1","PIZMKD_ING2":"12","PIZMKD_ING3":"13","PIZMKD_ING4":"14","PIZMKD_ING5":"0"},{"id":"12","name":"Sublim Curry","img":"sublimCurry.png","PIZMKD_ING1":"1","PIZMKD_ING2":"7","PIZMKD_ING3":"2","PIZMKD_ING4":"17","PIZMKD_ING5":"18"}]');
var ingredients =  JSON.parse('[{"id":"1","name":"Mozzarela","prix":"1.5","categorie":"FROMAGE"},{"id":"2","name":"Oignon","prix":"1.1","categorie":"AUTRES"},{"id":"3","name":"Tomates fraîches","prix":"1.2","categorie":"AUTRES"},{"id":"4","name":"Sauce au poivre","prix":"1.6","categorie":"SAUCE"},{"id":"5","name":"Boulettes de bœuf épicé","prix":"2","categorie":"VIANDE"},{"id":"6","name":"Champignons","prix":"1.2","categorie":"AUTRES"},{"id":"7","name":"Poulet rôti","prix":"2.2","categorie":"VIANDE"},{"id":"8","name":"Sauce à la moutarde à lancienne","prix":"1.3","categorie":"SAUCE"},{"id":"9","name":"Bacon","prix":"1.8","categorie":"VIANDE"},{"id":"10","name":"Potatoes","prix":"1.1","categorie":"AUTRES"},{"id":"11","name":"Raclette","prix":"1.4","categorie":"FROMAGE"},{"id":"12","name":"Lardons fumés","prix":"1.7","categorie":"VIANDE"},{"id":"13","name":"Pommes de terre","prix":"1.2","categorie":"AUTRES"},{"id":"14","name":"Reblochon","prix":"1.7","categorie":"FROMAGE"},{"id":"15","name":"Chèvre","prix":"1.4","categorie":"FROMAGE"},{"id":"16","name":"Miel","prix":"1","categorie":"SAUCE"},{"id":"17","name":"Poivrons mélangés","prix":"1","categorie":"AUTRES"},{"id":"18","name":"Sauce curry","prix":"1.2","categorie":"SAUCE"},{"id":"19","name":"Jambon","prix":"1.5","categorie":"VIANDE"},{"id":"20","name":"Origan","prix":"1.1","categorie":"AUTRES"},{"id":"21","name":"Sauce barbecue","prix":"1.2","categorie":"SAUCE"},{"id":"22","name":"MERGUEZ","prix":"2.1","categorie":"VIANDE"},{"id":"23","name":"Saucisson pepperoni","prix":"2.4","categorie":"VIANDE"},{"id":"24","name":"Emmental","prix":"1.5","categorie":"FROMAGE"},{"id":"25","name":"Saumon fumé","prix":"3","categorie":"VIANDE"},{"id":"26","name":"Aneth","prix":"0.7","categorie":"AUTRES"},{"id":"27","name":"Fourme dAmbert","prix":"1.4","categorie":"FROMAGE"},{"id":"28","name":"Olives noires","prix":"1.7","categorie":"AUTRES"},{"id":"29","name":"Ananas","prix":"1.9","categorie":"AUTRES"}]');


angular.module('starter.controllers', [])
  /* ****************
   Controlleurs
   * ****************/

  //Home
  .controller('HomeCtrl', function($scope,$state, $http, $ionicPopup) {

  })

  //Password
  .controller('PasswordCtrl', function($scope,$state, $http, $ionicPlatform) {

    $scope.authorization = {
      password : ''
    };

    $scope.signIn = function(form) {
      if(form.password.$viewValue == "test123") {
        $state.go('cuisine');
      }
      else if(form.password.$viewValue == "123test") {
        $state.go('serveur');
      }
    };
  })

  //Tables
  .controller('TablesCtrl', function($scope, $state, $http, $stateParams){
    $scope.tables = JSON.parse('[{"id":"1","num":"1","zone":"1","reservee":"1","paiement":"0"},{"id":"2","num":"2","zone":"1","reservee":"1","paiement":"0"},{"id":"3","num":"3","zone":"1","reservee":"1","paiement":"0"},{"id":"4","num":"4","zone":"1","reservee":"1","paiement":"0"},{"id":"5","num":"1","zone":"2","reservee":"0","paiement":"0"},{"id":"6","num":"2","zone":"2","reservee":"0","paiement":"0"},{"id":"7","num":"3","zone":"2","reservee":"0","paiement":"0"},{"id":"8","num":"4","zone":"2","reservee":"0","paiement":"0"},{"id":"9","num":"1","zone":"3","reservee":"0","paiement":"0"},{"id":"10","num":"2","zone":"3","reservee":"0","paiement":"0"},{"id":"11","num":"3","zone":"3","reservee":"0","paiement":"0"},{"id":"12","num":"4","zone":"3","reservee":"0","paiement":"0"},{"id":"13","num":"1","zone":"4","reservee":"0","paiement":"0"},{"id":"14","num":"2","zone":"4","reservee":"0","paiement":"0"},{"id":"15","num":"3","zone":"4","reservee":"0","paiement":"0"},{"id":"16","num":"4","zone":"4","reservee":"0","paiement":"0"},{"id":"17","num":"1","zone":"5","reservee":"0","paiement":"0"},{"id":"18","num":"2","zone":"5","reservee":"0","paiement":"0"},{"id":"19","num":"3","zone":"5","reservee":"0","paiement":"0"},{"id":"20","num":"4","zone":"5","reservee":"0","paiement":"0"},{"id":"21","num":"1","zone":"6","reservee":"0","paiement":"0"},{"id":"22","num":"2","zone":"6","reservee":"0","paiement":"0"},{"id":"23","num":"3","zone":"6","reservee":"0","paiement":"0"},{"id":"24","num":"4","zone":"6","reservee":"0","paiement":"0"}]');
    $scope.zones = new Array();
    $scope.zones[0] = new Array();
    /* Recupere les tables par zone puis par numéro */
    /* Indique si elles sont résérvées ou pas */
    $scope.zones[0].id  = $scope.tables[0].zone;
    var cpt = 0;
    for(var i=0; i<$scope.tables.length; i++) {
      if(!($scope.zones[cpt].id == $scope.tables[i].zone)) {
        cpt++;
        $scope.zones[cpt] = new Array();
        $scope.zones[cpt].id = $scope.tables[i].zone;
      }
      $scope.zones[cpt].push($scope.tables[i]);
    }

    $scope.getPizzaMkd = function(tableID, tableNum){
      $state.go('pizzas', {tableID: tableID, tableNum: tableNum});
    };
  })
  //Pizzas
  .controller('PizzasCtrl', function($scope, Pizzas, $stateParams, $state) {
    //Paramètres
    $scope.commandes = commandes;
    $scope.pizzasMkd = pizzasMkd;
    $scope.ingredients =  ingredients;

    $scope.tableID = $stateParams.tableID;
    $scope.tableNum = $stateParams.tableNum;

    //Fonctions
    $scope.getPizza = function(pizzaId){
      $state.go('pizzaCustom', {tableID: $scope.tableID, tableNum: $scope.tableNum, pizzaId: pizzaId});
    };

    $scope.createUser = function (userName){
      $scope.name = userName;
    };
    //Begin
    if ($scope.commandes.length == 0)
    {
      $scope.name = '';
    }
    else
    {
      //Récupération des users ID
      var listUsers = new Array();
      for (i = 0; i < $scope.commandes.length; i++)
      {
        listUsers.push($scope.commandes[i].user_id);
      }

      //Supprimage des users ID en doublons
      listUsers = listUsers.filter(function(v,i,a){
        return a.indexOf(v)==i
      });
      //Création d'un objet contenant pour chaque utilisateur toutes ses commandes
      var userCommande = new Array();
      for (i = 0; i < listUsers.length; i++)
      {
        var listPizzas = Array();
        var listBoissons = Array();
        var listDesserts = Array();
        for (j = 0; j < $scope.commandes.length; j++)
        {
          if(listUsers[i] == $scope.commandes[j].user_id)
          {
            listPizzas.push($scope.commandes[j].pizza_id);
            listBoissons.push($scope.commandes[j].bois_id);
            listDesserts.push($scope.commandes[j].dess_id);
          }
        }
        userCommande.push({user_id:listUsers[i],listPizzas:listPizzas,listBoissons:listBoissons,listDesserts:listDesserts});
      }
    }
    $scope.userCommande = userCommande;
    console.log($scope.userCommande);
  })

  //Pizza Custom
  .controller('PizzaCustomCtrl', function($scope, $state, $stateParams) {
    $scope.pizzasMkd = pizzasMkd;
    $scope.ingredients = ingredients;
    for(var i=0; i<$scope.pizzasMkd.length; i++) {
      if($scope.pizzasMkd[i].id == $stateParams.pizzaId) {
        $scope.pizza = $scope.pizzasMkd[i];
        break;
      }
    }
    /* If ceate new Pizza */
    if(typeof($scope.pizza) === 'undefined') {
      $scope.pizza = {img:"pizzaEmpty.png",
        PIZMKD_ING1:"",
        PIZMKD_ING2:"",
        PIZMKD_ING3:"",
        PIZMKD_ING4:"",
        PIZMKD_ING5:"",
        id:"",
        name:"VotrePizza"};
    }

    $scope.pizza.ingredients = new Array();
    for(var i=0; i<$scope.ingredients.length; i++) {
      switch($scope.ingredients[i].id) {
        case $scope.pizza.PIZMKD_ING1:
          $scope.pizza.ingredients[0] = $scope.ingredients[i];
          break;
        case $scope.pizza.PIZMKD_ING2:
          $scope.pizza.ingredients[1] = $scope.ingredients[i];
          break;
        case $scope.pizza.PIZMKD_ING3:
          $scope.pizza.ingredients[2] = $scope.ingredients[i];
          break;
        case $scope.pizza.PIZMKD_ING4:
          $scope.pizza.ingredients[3] = $scope.ingredients[i];
          break;
        case $scope.pizza.PIZMKD_ING5:
          $scope.pizza.ingredients[4] = $scope.ingredients[i];
          break;
      }
    }
    while($scope.pizza.ingredients.length != 5) {
      $scope.pizza.ingredients.push({categorie:"", id:"", name:"", prix:""});
    }
  })

  //Boissons
  .controller('BoissonsCtrl', function($scope, Boissons) {
    $scope.boissons = Boissons.all();
  })
  //Desserts
  .controller('DessertsCtrl', function($scope, Desserts) {
    $scope.desserts = Desserts.all();
  })
  //Cuisine
  .controller('CuisineCtrl', function($scope, Commandes) {
    $scope.commandes = Commandes.all();
  })
  //Serveur
  .controller('ServeurCtrl', function($scope, Commandes) {
    $scope.commandes = Commandes.all();
  })

  //Commentaire
  .controller('CommentaireCtrl', function($scope) {

  })

  //Paeiment
  .controller('PaiementCtrl', function($scope) {

  })
  //Timer
  .controller('TimerCtrl', function($scope, $ionicModal, $timeout) {
    // Timer
    var mytimeout = null; // the current timeoutID
    // actual timer method, counts down every second, stops on zero
    $scope.onTimeout = function() {
      if ($scope.timer === 0) {
        $scope.$broadcast('timer-stopped', 0);
        $timeout.cancel(mytimeout);
        return;
      }
      $scope.timer--;
      mytimeout = $timeout($scope.onTimeout, 1000);
    };
    // functions to control the timer
    // starts the timer
    $scope.startTimer = function() {
      mytimeout = $timeout($scope.onTimeout, 1000);
      $scope.started = true;
    };
    // stops and resets the current timer
    $scope.stopTimer = function(closingModal) {
      if (closingModal != true) {
        $scope.$broadcast('timer-stopped', $scope.timer);
      }
      $scope.timer = $scope.timeForTimer;
      $scope.started = false;
      $scope.paused = false;
      $timeout.cancel(mytimeout);
    };
    // pauses the timer
    $scope.pauseTimer = function() {
      $scope.$broadcast('timer-stopped', $scope.timer);
      $scope.started = false;
      $scope.paused = true;
      $timeout.cancel(mytimeout);
    };
    // triggered, when the timer stops, you can do something here, maybe show a visual indicator or vibrate the device
    $scope.$on('timer-stopped', function(event, remaining) {
      if (remaining === 0) {
        $scope.done = true;
      }
    });
    // UI
    // When you press a timer button this function is called
    $scope.selectTimer = function(val) {
      $scope.timeForTimer = val;
      $scope.timer = val
      $scope.started = false;
      $scope.paused = false;
      $scope.done = false;
    };
    // This function helps to display the time in a correct way in the center of the timer
    $scope.humanizeDurationTimer = function(input, units) {
      // units is a string with possible values of y, M, w, d, h, m, s, ms
      if (input == 0) {
        return 0;
      } else {
        var duration = moment().startOf('day').add(input, units);
        var format = "";
        if (duration.hour() > 0) {
          format += "H[h] ";
        }
        if (duration.minute() > 0) {
          format += "m[m] ";
        }
        if (duration.second() > 0) {
          format += "s[s] ";
        }
        return duration.format(format);
      }
    };
    // function for the modal
    $ionicModal.fromTemplateUrl('templates/timer.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.selectTimer(4);
    $scope.startTimer();
  })
