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
    db = $cordovaSQLite.openDB("mikados.db");
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS tables (TBL_ID INTEGER PRIMARY KEY AUTOINCREMENT, TBL_NUM INTEGER, TBL_ZONE INTERGER, TBL_RESERVEE INTEGER DEFAULT 0,TBL_PAIEMENT INTEGER DEFAULT 0)');

    var sql = 'INSERT INTO `tables` (`TBL_ID`, `TBL_NUM`, `TBL_ZONE`, `TBL_RESERVEE`, `TBL_PAIEMENT`) VALUES (1, 1, 1, 0, 0),';
    sql += '(2, 2, 1, 0, 0),';
    sql += '(3, 3, 1, 0, 0),';
    sql += '(4, 4, 1, 0, 0),';
    sql += '(5, 1, 2, 0, 0),';
    sql += '(6, 2, 2, 0, 0),';
    sql += '(7, 3, 2, 0, 0),';
    sql += '(8, 4, 2, 0, 0),';
    sql += '(9, 1, 3, 0, 0),';
    sql += '(10, 2, 3, 0, 0),';
    sql += '(11, 3, 3, 0, 0),';
    sql += '(12, 4, 3, 0, 0),';
    sql += '(13, 1, 4, 0, 0),';
    sql += '(14, 2, 4, 0, 0),';
    sql += '(15, 3, 4, 0, 0),';
    sql += '(16, 4, 4, 0, 0),';
    sql += '(17, 1, 5, 0, 0),';
    sql += '(18, 2, 5, 0, 0),';
    sql += '(19, 3, 5, 0, 0),';
    sql += '(20, 4, 5, 0, 0),';
    sql += '(21, 1, 6, 0, 0),';
    sql += '(22, 2, 6, 0, 0),';
    sql += '(23, 3, 6, 0, 0),';
    sql += '(24, 4, 6, 0, 0)';
    $cordovaSQLite.execute(db, sql);
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
