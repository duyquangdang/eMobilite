angular.module('starter.controllers', [])

/************************************/
/*       HOME CONTROLLEUR           */
/************************************/
  .controller('HomeCtrl', function() {
    /*******************/
    /*    Paramètres   */
    /*******************/

    /*******************/
    /*    Fonctions    */
    /*******************/

    /*******************/
    /*   SQL REQUETES  */
    /*******************/
  })




/************************************/
/*       PASSWORD CONTROLLEUR       */
/************************************/
  .controller('PasswordCtrl', function($scope, $state) {
    /*******************/
    /*    Paramètres   */
    /*******************/

    /*******************/
    /*    Fonctions    */
    /*******************/
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

    /*******************/
    /*   SQL REQUETES  */
    /*******************/
    
  })




/************************************/
/*        TABLES CONTROLLEUR        */
/************************************/
  .controller('TablesCtrl', function($scope, $state, $cordovaSQLite){
    /*******************/
    /*    Paramètres   */
    /*******************/

    /*******************/
    /*    Fonctions    */
    /*******************/
    $scope.goToPizzas = function(tableID, tableNum){
      $state.go('pizzas', {tableID: tableID, tableNum: tableNum});
    };

    /*******************/
    /*   SQL REQUETES  */
    /*******************/
    $cordovaSQLite.execute(db, 'SELECT * FROM tables')
      .then(

        // On succes
        function(res) {
          $scope.tables = new Array();
          for (i=0; i < res.rows.length; i++)
          {
            $scope.tables.push({
              "id":res.rows.item(i).TBL_ID
              ,"num":res.rows.item(i).TBL_NUM
              ,"zone":res.rows.item(i).TBL_ZONE
              ,"reservee":res.rows.item(i).TBL_RESERVEE
              ,"paiement":res.rows.item(i).TBL_PAIEMENT
            });
          }
          
          //Table group by zone
          $scope.zones = new Array();
          $scope.zones[0] = new Array();
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
        },

        // On error
        function(error) {
          $scope.statusMessage = "Error on loading: " + error.message;
        }
      );

    
  })




/************************************/
/*       PIZZAS CONTROLLEUR         */
/************************************/
  .controller('PizzasCtrl', function($scope, Pizzas, $stateParams, $state, $ionicPopup, $cordovaSQLite) {
    /*******************/
    /*    Paramètres   */
    /*******************/
    $scope.tableID = $stateParams.tableID;
    $scope.tableNum = $stateParams.tableNum;

    /*******************/
    /*    Fonctions    */
    /*******************/
    $scope.goToPizzasCustom = function(pizzaID){
      $state.go('pizzaCustom', {tableID: $scope.tableID, tableNum: $scope.tableNum, pizzaID: pizzaID});
    };

    $scope.goToBoissons = function(){
      $state.go('boissons', {tableID: $scope.tableID, tableNum: $scope.tableNum});
    };

    $scope.createUser = function (userName){
      $scope.name = userName;
    };

    $scope.call = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Appeler le serveur',
        template: 'Avez vous une question a poser au serveur ?'
      });

      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };

    /*******************/
    /*   SQL REQUETES  */
    /*******************/
    //Get All Pizzas
    $scope.getPizzaAll = function()
    {
      $cordovaSQLite.execute(db, 'SELECT * FROM pizzas_mkd')
        .then(

          // On succes
          function(res)
          {
            $scope.pizzasMkd = new Array();
            for (i=0; i < res.rows.length; i++)
            {
              $scope.pizzasMkd.push({
                "id":res.rows.item(i).PIZMKD_ID
                ,"name":res.rows.item(i).PIZMKD_NAME
                ,"img":res.rows.item(i).PIZMKD_IMG
                ,"ing1":res.rows.item(i).PIZMKD_ING1
                ,"ing2":res.rows.item(i).PIZMKD_ING2
                ,"ing3":res.rows.item(i).PIZMKD_ING3
                ,"ing4":res.rows.item(i).PIZMKD_ING4
                ,"ing5":res.rows.item(i).PIZMKD_ING5
                ,"categorie":res.rows.item(i).PIZMKD_CAT
                ,"vote":res.rows.item(i).PIZMKD_VOTE
              });
            }

            $scope.categoriePizzas = "All";
          },

          // On error
          function(error) {
            $scope.statusMessage = "Error on loading: " + error.message;
          }
      );
    }

    //Get pizzas by categories
    $scope.getPizzaCat = function(categorie)
    {
      $cordovaSQLite.execute(db, 'SELECT * FROM pizzas_mkd WHERE PIZMKD_CAT = (?)', [categorie])
        .then(

          // On succes
          function(res)
          {
            $scope.pizzasMkd = new Array();
            for (i=0; i < res.rows.length; i++)
            {
              $scope.pizzasMkd.push({
                "id":res.rows.item(i).PIZMKD_ID
                ,"name":res.rows.item(i).PIZMKD_NAME
                ,"img":res.rows.item(i).PIZMKD_IMG
                ,"ing1":res.rows.item(i).PIZMKD_ING1
                ,"ing2":res.rows.item(i).PIZMKD_ING2
                ,"ing3":res.rows.item(i).PIZMKD_ING3
                ,"ing4":res.rows.item(i).PIZMKD_ING4
                ,"ing5":res.rows.item(i).PIZMKD_ING5
                ,"categorie":res.rows.item(i).PIZMKD_CAT
                ,"vote":res.rows.item(i).PIZMKD_VOTE
              });
            }

            $scope.categoriePizzas = categorie;
          },

          // On error
          function(error) {
            $scope.statusMessage = "Error on loading: " + error.message;
          }
      );
    }

    //Get Top Pizzas
    $scope.getPizzaTop = function(number)
    {
      $cordovaSQLite.execute(db, 'SELECT * FROM pizzas_mkd ORDER BY PIZMKD_VOTE DESC limit (?)', [number])
        .then(

          // On succes
          function(res)
          {
            $scope.pizzasMkd = new Array();
            for (i=0; i < res.rows.length; i++)
            {
              $scope.pizzasMkd.push({
                "id":res.rows.item(i).PIZMKD_ID
                ,"name":res.rows.item(i).PIZMKD_NAME
                ,"img":res.rows.item(i).PIZMKD_IMG
                ,"ing1":res.rows.item(i).PIZMKD_ING1
                ,"ing2":res.rows.item(i).PIZMKD_ING2
                ,"ing3":res.rows.item(i).PIZMKD_ING3
                ,"ing4":res.rows.item(i).PIZMKD_ING4
                ,"ing5":res.rows.item(i).PIZMKD_ING5
                ,"categorie":res.rows.item(i).PIZMKD_CAT
                ,"vote":res.rows.item(i).PIZMKD_VOTE
              });
            }

             $scope.categoriePizzas = "Top";
          },

          // On error
          function(error) {
            $scope.statusMessage = "Error on loading: " + error.message;
          }
      );
    }

    //Get all pizzas by default
    $cordovaSQLite.execute(db, 'SELECT * FROM pizzas_mkd')
      .then(

        // On succes
        function(res) {
          $scope.pizzasMkd = new Array();
          for (i=0; i < res.rows.length; i++)
          {
            $scope.pizzasMkd.push({
              "id":res.rows.item(i).PIZMKD_ID
              ,"name":res.rows.item(i).PIZMKD_NAME
              ,"img":res.rows.item(i).PIZMKD_IMG
              ,"ing1":res.rows.item(i).PIZMKD_ING1
              ,"ing2":res.rows.item(i).PIZMKD_ING2
              ,"ing3":res.rows.item(i).PIZMKD_ING3
              ,"ing4":res.rows.item(i).PIZMKD_ING4
              ,"ing5":res.rows.item(i).PIZMKD_ING5
              ,"categorie":res.rows.item(i).PIZMKD_CAT
              ,"vote":res.rows.item(i).PIZMKD_VOTE
            });
          }
          $scope.categoriePizzas = "All";
        },

        // On error
        function(error) {
          $scope.statusMessage = "Error on loading: " + error.message;
        }
      );

    //Get commandes if exists
    $cordovaSQLite.execute(db, 'SELECT * FROM commandes WHERE CMD_PRET=0 AND CMD_TBL_ID = (?)', [$scope.tableID])
      .then(

        // On succes
        function(res) {
          $scope.commandes = new Array();
          for (i=0; i < res.rows.length; i++)
          {
            $scope.commandes.push({
              "id":res.rows.item(i).CMD_ID
              ,"tbl_id":res.rows.item(i).CMD_TBL_ID
              ,"user_id":res.rows.item(i).CMD_USER_ID
              ,"pizza_id":res.rows.item(i).CMD_PIZZA_ID
              ,"bois_id":res.rows.item(i).CMD_BOIS_ID
              ,"dess_id":res.rows.item(i).CMD_DESS_ID
              ,"pret":res.rows.item(i).CMD_PRET
            });
          }

          // S'il n'y avait pas de commande
          if ($scope.commandes.length == 0)
          {
            $scope.name = '';
          }

          // Sinon si une commande était en cours
          else
          {
            //Récupération des users ID
            var listUsers = new Array();
            for (i = 0; i < $scope.commandes.length; i++)
            {
              listUsers.push($scope.commandes[i].user_id);
            }

            //On supprime les users ID en doublons
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
          
          
        },

        // On error
        function(error) {
          $scope.statusMessage = "Error on loading: " + error.message;
        }
      );


  })




/************************************/
/*     PIZZAS CUSTOM CONTROLLEUR    */
/************************************/
  .controller('PizzaCustomCtrl', function($scope, $state, $stateParams, $ionicPopup, $cordovaSQLite) {

    /*******************/
    /*    Paramètres   */
    /*******************/
    $scope.pizzaID = $stateParams.pizzaID;
    $scope.tableID = $stateParams.tableID;
    $scope.tableNum = $stateParams.tableNum;

    /*******************/
    /*    Fonctions    */
    /*******************/
    $scope.goToPizzas = function(){
      $state.go('pizzas', {tableID: $scope.tableID, tableNum: $scope.tableNum});
    };

    $scope.goToBoissons = function(){
      $state.go('boissons', {tableID: $scope.tableID, tableNum: $scope.tableNum});
    };

    $scope.call = function()
    {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Appeler le serveur',
        template: 'Avez vous une question à poser au serveur ?'
      });

      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };

    /*******************/
    /*   SQL REQUETES  */
    /*******************/
    $cordovaSQLite.execute(db, 'SELECT * FROM pizzas_mkd WHERE PIZMKD_ID = (?)',[$scope.pizzaID])
      .then(

        // On succes
        function(res) {
          // Si la pizza existe
          if (res.rows.length == 1)
          {
            $scope.pizza = {
              "id":res.rows.item(0).PIZMKD_ID
              ,"name":res.rows.item(0).PIZMKD_NAME
              ,"img":res.rows.item(0).PIZMKD_IMG
              ,"ing1":res.rows.item(0).PIZMKD_ING1
              ,"ing2":res.rows.item(0).PIZMKD_ING2
              ,"ing3":res.rows.item(0).PIZMKD_ING3
              ,"ing4":res.rows.item(0).PIZMKD_ING4
              ,"ing5":res.rows.item(0).PIZMKD_ING5
              ,"categorie":res.rows.item(0).PIZMKD_CAT
              ,"vote":res.rows.item(0).PIZMKD_VOTE
            };
          }

          // Sinon si c'est une pizza custom
          else
          {
            $scope.pizza = {
              id:""
              ,name:"Votre Pizza"
              ,img:"pizzaEmpty.png"
              ,ing1:""
              ,ing2:""
              ,ing3:""
              ,ing4:""
              ,ing5:""
              ,categorie:""
              ,vote:0
            };
          }

          //Get Ingredients
          $cordovaSQLite.execute(db, 'SELECT * FROM ingredients')
            .then(

              // On succes
              function(res) {
                $scope.ingredients = new Array();
                for (i=0; i < res.rows.length; i++)
                {
                  $scope.ingredients.push({
                    "id":res.rows.item(i).ING_ID
                    ,"name":res.rows.item(i).ING_NOM
                    ,"prix":res.rows.item(i).ING_PRIX
                    ,"categorie":res.rows.item(i).ING_CATEGORIE
                  });
                }

                $scope.pizza.ingredients = new Array();
                for(var i=0; i<$scope.ingredients.length; i++)
                {
                  switch($scope.ingredients[i].id)
                  {
                    case $scope.pizza.ing1:
                      $scope.pizza.ingredients[0] = $scope.ingredients[i];
                      break;
                    case $scope.pizza.ing2:
                      $scope.pizza.ingredients[1] = $scope.ingredients[i];
                      break;
                    case $scope.pizza.ing3:
                      $scope.pizza.ingredients[2] = $scope.ingredients[i];
                      break;
                    case $scope.pizza.ing4:
                      $scope.pizza.ingredients[3] = $scope.ingredients[i];
                      break;
                    case $scope.pizza.ing5:
                      $scope.pizza.ingredients[4] = $scope.ingredients[i];
                      break;
                  }
                }
                while($scope.pizza.ingredients.length != 5)
                {
                  $scope.pizza.ingredients.push({categorie:"", id:"", name:"", prix:""});
                }
                
              },

              // On error
              function(error) {
                $scope.statusMessage = "Error on loading: " + error.message;
              }
            );

          
        },

        // On error
        function(error) {
          $scope.statusMessage = "Error on loading: " + error.message;
        }
      );
  })




/************************************/
/*        BOISSONS CONTROLLEUR      */
/************************************/
  .controller('BoissonsCtrl', function($scope, $state, Boissons, $ionicPopup,$stateParams, $cordovaSQLite) {
    /*******************/
    /*    Paramètres   */
    /*******************/
    $scope.tableID = $stateParams.tableID;
    $scope.tableNum = $stateParams.tableNum;

    /*******************/
    /*    Fonctions    */
    /*******************/
    $scope.goToPizzas = function(){
      $state.go('pizzas', {tableID: $scope.tableID, tableNum: $scope.tableNum});
    };

    $scope.goToDesserts = function(){
      $state.go('desserts', {tableID: $scope.tableID, tableNum: $scope.tableNum});
    };

    $scope.call = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Appeler le serveur',
        template: 'Avez vous une question a poser au serveur ?'
      });

      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };


    /*******************/
    /*   SQL REQUETES  */
    /*******************/
    $cordovaSQLite.execute(db, 'SELECT * FROM boissons')
      .then(

        // On succes
        function(res)
        {
          $scope.boissons = new Array();
          for (i=0; i < res.rows.length; i++)
          {
            $scope.boissons.push({
              "id":res.rows.item(i).BOISS_ID
              ,"name":res.rows.item(i).BOISS_NAME
              ,"img":res.rows.item(i).BOISS_IMG
              ,"categorie":res.rows.item(i).BOISS_CAT
            });
          }
        },

        // On error
        function(error) {
          $scope.statusMessage = "Error on loading: " + error.message;
        }
    );

    
  })




/************************************/
/*        DESSERTS CONTROLLEUR      */
/************************************/
  .controller('DessertsCtrl', function($scope,$state, $stateParams,Desserts, $ionicPopup,$cordovaSQLite) {
    /*******************/
    /*    Paramètres   */
    /*******************/
    $scope.tableID = $stateParams.tableID;
    $scope.tableNum = $stateParams.tableNum;

    /*******************/
    /*    Fonctions    */
    /*******************/
    $scope.goToBoissons = function(){
      $state.go('boissons', {tableID: $scope.tableID, tableNum: $scope.tableNum});
    };

    $scope.call = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Appeler le serveur',
        template: 'Avez vous une question a poser au serveur ?'
      });

      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };

    /*******************/
    /*   SQL REQUETES  */
    /*******************/
    $cordovaSQLite.execute(db, 'SELECT * FROM desserts')
      .then(

        // On succes
        function(res)
        {
          $scope.desserts = new Array();
          for (i=0; i < res.rows.length; i++)
          {
            $scope.desserts.push({
              "id":res.rows.item(i).DESS_ID
              ,"name":res.rows.item(i).DESS_NAME
              ,"img":res.rows.item(i).DESS_IMG
              ,"categorie":res.rows.item(i).DESS_CAT
            });
          }
        },

        // On error
        function(error) {
          $scope.statusMessage = "Error on loading: " + error.message;
        }
    );
  })




/************************************/
/*        CUISINE CONTROLLEUR       */
/************************************/
  .controller('CuisineCtrl', function($scope, Commandes) {
    /*******************/
    /*    Paramètres   */
    /*******************/

    /*******************/
    /*    Fonctions    */
    /*******************/

    /*******************/
    /*   SQL REQUETES  */
    /*******************/

    $scope.commandes = Commandes.all();
  })




/************************************/
/*        SERVEUR CONTROLLEUR       */
/************************************/
  .controller('ServeurCtrl', function($scope, Commandes) {
    /*******************/
    /*    Paramètres   */
    /*******************/

    /*******************/
    /*    Fonctions    */
    /*******************/

    /*******************/
    /*   SQL REQUETES  */
    /*******************/

    $scope.commandes = Commandes.all();
  })




/************************************/
/*     COMMENTAIRE CONTROLLEUR      */
/************************************/
  .controller('CommentaireCtrl', function($scope, $ionicPopup) {
    /*******************/
    /*    Paramètres   */
    /*******************/

    /*******************/
    /*    Fonctions    */
    /*******************/
    $scope.call = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Appeler le serveur',
        template: 'Avez vous une question a poser au serveur ?'
      });

      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };

    /*******************/
    /*   SQL REQUETES  */
    /*******************/

    
  })




/************************************/
/*       PAIEMENT CONTROLLEUR       */
/************************************/
  .controller('PaiementCtrl', function($scope, $ionicPopup) {
    /*******************/
    /*    Paramètres   */
    /*******************/

    /*******************/
    /*    Fonctions    */
    /*******************/
    $scope.call = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Appeler le serveur',
        template: 'Avez vous une question a poser au serveur ?'
      });

      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };
    /*******************/
    /*   SQL REQUETES  */
    /*******************/

    
  })





/************************************/
/*         TIMER CONTROLLEUR        */
/************************************/
  .controller('TimerCtrl', function($scope, $ionicModal, $timeout, $ionicPopup) {
    /*******************/
    /*    Paramètres   */
    /*******************/

    /*******************/
    /*    Fonctions    */
    /*******************/
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

    $scope.call = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Appeler le serveur',
        template: 'Avez vous une question a poser au serveur ?'
      });

      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };

    
    /*******************/
    /*   SQL REQUETES  */
    /*******************/
  })
