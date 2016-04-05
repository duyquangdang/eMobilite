var db;

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'angular-svg-round-progress', 'ngMessages', 'ngCordova'])

.run(function($ionicPlatform, $ionicPopup, $cordovaSQLite) {
	/*$ionicPlatform.registerBackButtonAction(function(event) {
    if (true) { // your check here
      $ionicPopup.alert({
        title: 'System warning',
        template: 'Vous ne pouvez pas revenir en arrière.'
      })
    }
  }, 100);*/

  $ionicPlatform.ready(function() {
	  /* Delete this for sqllite */
    // if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
	  // cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      // cordova.plugins.Keyboard.disableScroll(true);

    // }
    /*if (window.StatusBar) {
      StatusBar.styleDefault();
    }*/
    db = $cordovaSQLite.openDB("nextflow.db");
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS Messages (id INTEGER PRIMARY KEY AUTOINCREMENT, message TEXT)');
  });
})


/* ****************
      Pages
* ****************/

.config(function($stateProvider, $urlRouterProvider) {
  // Home
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })

  // Password
  $stateProvider.state('password', {
    url: '/password',
    templateUrl: 'templates/password.html',
    controller: 'PasswordCtrl'
  })

  // Tables
  $stateProvider.state('tables', {
    url: '/tables',
    templateUrl: 'templates/tables.html',
    controller: 'TablesCtrl'
  })

 // Pizzas
  $stateProvider.state('pizzas', {
    //url: '/pizzas/:pizzasMkd:ingredients:tableID:tableNum:commandes',
    url: '/pizzas:tableID:tableNum',
    templateUrl: 'templates/pizzas.html',
    controller: 'PizzasCtrl'
  })

  // PizzaCustom
  $stateProvider.state('pizzaCustom', {
    //url: '/:pizzasMkd:ingredients:tableID:tableNum:pizzaId/pizzaCustom',
    url: '/pizzaCustom:tableID:tableNum:pizzaId',
    templateUrl: 'templates/pizzaCustom.html',
    controller: 'PizzaCustomCtrl'
  })

  // Boissons
  $stateProvider.state('boissons', {
    url: '/boissons',
    templateUrl: 'templates/boissons.html',
    controller: 'BoissonsCtrl'
  })

  // Desserts
  $stateProvider.state('desserts', {
    url: '/desserts',
    templateUrl: 'templates/desserts.html',
    controller: 'DessertsCtrl'
  })

  // Cuisine
  $stateProvider.state('cuisine', {
    url: '/cuisine',
    templateUrl: 'templates/cuisine.html',
    controller: 'CuisineCtrl'
  })

   // Serveur
  $stateProvider.state('serveur', {
    url: '/serveur',
    templateUrl: 'templates/serveur.html',
    controller: 'ServeurCtrl'
  })

  // Timer
  $stateProvider.state('timer', {
    url: '/timer',
    templateUrl: 'templates/timer.html',
    controller: 'TimerCtrl'
  })

  // Commentaire
  $stateProvider.state('commentaire', {
    url: '/commentaire',
    templateUrl: 'templates/commentaire.html',
    controller: 'CommentaireCtrl'
  })

  // Paiement
  $stateProvider.state('paiement', {
    url: '/paiement',
    templateUrl: 'templates/paiement.html',
    controller: 'PaiementCtrl'
  })

  // Template par defaut
  $urlRouterProvider.otherwise('/home')

});
