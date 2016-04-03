angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'angular-svg-round-progress', 'ngMessages', 'nfcFilters'])

.run(function($ionicPlatform, $ionicPopup) {
	/*$ionicPlatform.registerBackButtonAction(function(event) {
    if (true) { // your check here
      $ionicPopup.alert({
        title: 'System warning',
        template: 'Vous ne pouvez pas revenir en arrière.'
      })
    }
  }, 100);*/
  
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
	  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
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
    url: '/tables:listTables',
    templateUrl: 'templates/tables.html',
    controller: 'TablesCtrl'
  })
  
 // Pizzas
  $stateProvider.state('pizzas', {
    url: '/pizzas/:pizzasMkd:ingredients:tableID:tableNum:commandes',
    templateUrl: 'templates/pizzas.html',
    controller: 'PizzasCtrl'
  })
  
  // PizzaCustom
  $stateProvider.state('pizzaCustom', {
    url: '/:pizzasMkd:ingredients:tableID:tableNum:pizzaId/pizzaCustom',
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
  
  // Template par defaut
  $urlRouterProvider.otherwise('/home')

});