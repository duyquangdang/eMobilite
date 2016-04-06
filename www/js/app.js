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

    //Create tables
    
    $cordovaSQLite.execute(db,'DROP TABLE tables');
    $cordovaSQLite.execute(db,'DROP TABLE commandes');
    $cordovaSQLite.execute(db,'DROP TABLE pizzas_mkd');
    $cordovaSQLite.execute(db,'DROP TABLE pizzas_cmd');
    $cordovaSQLite.execute(db,'DROP TABLE ingredients');
    $cordovaSQLite.execute(db,'DROP TABLE user');
    $cordovaSQLite.execute(db,'DROP TABLE boissons');
    $cordovaSQLite.execute(db,'DROP TABLE desserts');

    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS tables (TBL_ID INTEGER PRIMARY KEY AUTOINCREMENT, TBL_NUM INTEGER, TBL_ZONE INTERGER, TBL_RESERVEE INTEGER DEFAULT 0,TBL_PAIEMENT INTEGER DEFAULT 0)');
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS commandes ( CMD_ID INTEGER PRIMARY KEY AUTOINCREMENT,CMD_TBL_ID INTEGER,CMD_USER_ID INTEGER,CMD_PIZZA_ID INTEGER DEFAULT 0,CMD_BOIS_ID INTEGER DEFAULT 0,CMD_DESS_ID INTEGER DEFAULT 0,CMD_PRET INTEGER DEFAULT 0)');
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS pizzas_mkd (PIZMKD_ID INTEGER PRIMARY KEY AUTOINCREMENT,PIZMKD_IMG TEXT,PIZMKD_NAME TEXT,PIZMKD_ING1 INTEGER DEFAULT 0,PIZMKD_ING2 INTEGER DEFAULT 0,PIZMKD_ING3 INTEGER DEFAULT 0,PIZMKD_ING4 INTEGER DEFAULT 0,PIZMKD_ING5 INTEGER DEFAULT 0,PIZMKD_CAT TEXT,PIZMKD_VOTE INTEGER DEFAULT 0)');
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS pizzas_cmd (PIZCMD_ID INTEGER PRIMARY KEY AUTOINCREMENT,PIZCMD_IMG TEXT,PIZCMD_NAME TEXT,PIZCMD_DIAM INTEGER,PIZCMD_BASE INTEGER,PIZCMD_PATE INTEGER,PIZCMD_ING1 INTEGER,PIZCMD_ING2 INTEGER,PIZCMD_ING3 INTEGER,PIZCMD_ING4 INTEGER,PIZCMD_ING5 INTEGER)');
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS ingredients (ING_ID INTEGER PRIMARY KEY AUTOINCREMENT,ING_NOM TEXT,ING_PRIX REAL,ING_CATEGORIE TEXT)');
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS user (USER_ID INTEGER PRIMARY KEY AUTOINCREMENT,USER_NAME TEXT)');
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS boissons (BOISS_ID INTEGER PRIMARY KEY AUTOINCREMENT,BOISS_NAME TEXT, BOISS_IMG TEXT, BOISS_CAT TEXT)');
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS desserts (DESS_ID INTEGER PRIMARY KEY AUTOINCREMENT,DESS_NAME TEXT, DESS_IMG TEXT, DESS_CAT TEXT)');

    //Insert values
    var sql = 'REPLACE INTO `tables` (`TBL_ID`, `TBL_NUM`, `TBL_ZONE`, `TBL_RESERVEE`, `TBL_PAIEMENT`) VALUES ';
    sql += '(1, 1, 1, 1, 0),';
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

    sql = 'REPLACE INTO `pizzas_mkd` (`PIZMKD_ID`, `PIZMKD_IMG`, `PIZMKD_NAME`, `PIZMKD_ING1`, `PIZMKD_ING2`, `PIZMKD_ING3`, `PIZMKD_ING4`, `PIZMKD_ING5`, `PIZMKD_CAT`, `PIZMKD_VOTE`) VALUES';
    sql += '(1, "baconGroovy.png", "Bacon Groovy", 1, 7, 2, 9, 21,"VIANDE",0),';
    sql += '(2, "cannibale.png", "Cannibale", 21, 1, 7, 5, 22,"VIANDE",0),';
    sql += '(3, "divinePepper.png", "Divine Pepper", 1, 3, 4, 5, 0,"VIANDE",0),';
    sql += '(4, "extravaganzza.png", "Extravaganzza", 1, 23, 19, 5, 28,"VIANDE",0),';
    sql += '(5, "forestiere.png", "Forestiere", 1, 12, 2, 19, 6,"SANS VIANDE",0),';
    sql += '(6, "originalMoutarde.png", "Original Moutarde", 1, 2, 6, 7, 8,"POULET",0),';
    sql += '(7, "pepperoni.png", "Pepperoni", 1, 7, 23, 3, 24,"POULET",0),';
    sql += '(8, "quatreFromages.png", "4 fromages", 1, 15, 24, 27, 0,"SANS VIANDE",10),';
    sql += '(9, "raclette.png", "Raclette", 1, 9, 2, 10, 11,"VIANDE",10),';
    sql += '(10, "saumoneta.png", "Saumoneta", 1, 2, 13, 25, 26,"POISSON",10),';
    sql += '(11, "savoyarde.png", "Savoyarde", 1, 12, 13, 14, 0,"VIANDE",10),';
    sql += '(12, "sublimCurry.png", "Sublim Curry", 1, 7, 2, 17, 18,"POULET",10)';
    $cordovaSQLite.execute(db, sql);

    sql = 'REPLACE INTO `ingredients` (`ING_ID`, `ING_NOM`, `ING_PRIX`, `ING_CATEGORIE`) VALUES';
    sql += '(1, "Mozzarela", 1.5, "FROMAGE"),';
    sql += '(2, "Oignon", 1.1, "AUTRES"),';
    sql += '(3, "Tomates fraîches", 1.2, "AUTRES"),';
    sql += '(4, "Sauce au poivre", 1.6, "SAUCE"),';
    sql += '(5, "Boulettes de bœuf épicé", 2, "VIANDE"),';
    sql += '(6, "Champignons", 1.2, "AUTRES"),';
    sql += '(7, "Poulet rôti", 2.2, "VIANDE"),';
    sql += '(8, "Sauce à la moutarde à l""ancienne", 1.3, "SAUCE"),';
    sql += '(9, "Bacon", 1.8, "VIANDE"),';
    sql += '(10, "Potatoes", 1.1, "AUTRES"),';
    sql += '(11, "Raclette", 1.4, "FROMAGE"),';
    sql += '(12, "Lardons fumés", 1.7, "VIANDE"),';
    sql += '(13, "Pommes de terre", 1.2, "AUTRES"),';
    sql += '(14, "Reblochon", 1.7, "FROMAGE"),';
    sql += '(15, "Chèvre", 1.4, "FROMAGE"),';
    sql += '(16, "Miel", 1, "SAUCE"),';
    sql += '(17, "Poivrons mélangés", 1, "AUTRES"),';
    sql += '(18, "Sauce curry", 1.2, "SAUCE"),';
    sql += '(19, "Jambon", 1.5, "VIANDE"),';
    sql += '(20, "Origan", 1.1, "AUTRES"),';
    sql += '(21, "Sauce barbecue", 1.2, "SAUCE"),';
    sql += '(22, "MERGUEZ", 2.1, "VIANDE"),';
    sql += '(23, "Saucisson pepperoni", 2.4, "VIANDE"),';
    sql += '(24, "Emmental", 1.5, "FROMAGE"),';
    sql += '(25, "Saumon fumé", 3, "VIANDE"),';
    sql += '(26, "Aneth", 0.7, "AUTRES"),';
    sql += '(27, "Fourme d""Ambert", 1.4, "FROMAGE"),';
    sql += '(28, "Olives noires", 1.7, "AUTRES"),';
    sql += '(29, "Ananas", 1.9, "AUTRES")';
    $cordovaSQLite.execute(db, sql);

    sql = 'REPLACE INTO `boissons` (`BOISS_ID`, `BOISS_NAME`, `BOISS_IMG`, `BOISS_CAT`) VALUES';
    sql += '(0,"Coca Cola", "img/boissons/coca.png", "froid"),';
    sql += '(1,"Coca Cola Cherry", "img/boissons/cocaCherry.png", "froid"),';
    sql += '(2,"Coca Cola Zero", "img/boissons/cocaZero.png", "froid"),';
    sql += '(3,"Evian", "img/boissons/evian.png", "froid"),';
    sql += '(4,"Fanta", "img/boissons/fanta.png", "froid"),';
    sql += '(5,"Bière", "img/boissons/heineken.png", "alcool"),';
    sql += '(6,"Ice Tea", "img/boissons/nestea.png", "froid"),';
    sql += '(7,"Oasis", "img/boissons/oasis.png", "froid")';
    $cordovaSQLite.execute(db, sql);

    sql = 'REPLACE INTO `desserts` (`DESS_ID`, `DESS_NAME`, `DESS_IMG`, `DESS_CAT`) VALUES';
    sql += '(0,"Beignets Chocolat-Noisette", "img/desserts/beignetsChocoNoisette.png", "tarte"),';
    sql += '(1,"Ben&Jerrys Brownie", "img/desserts/benBrownie.png", "glace"),';
    sql += '(2,"Ben&Jerrys Caramel", "img/desserts/benCaramel.png", "glace"),';
    sql += '(3,"Ben&Jerrys Chunky Monkey", "img/desserts/benChunkyMonkey.png", "glace"),';
    sql += '(4,"Ben&Jerrys Coco Brownie", "img/desserts/benCocoBrownie.png", "glace"),';
    sql += '(5,"Ben&Jerrys Cookie Dough", "img/desserts/benCookieDough.png", "glace"),';
    sql += '(6,"Ben&Jerrys Fairly Nuts", "img/desserts/benFairlyNuts.png", "glace"),';
    sql += '(7,"Ben&Jerrys Peanut Butter", "img/desserts/benPeanutButter.png", "glace"),';
    sql += '(8,"Ben&Jerrys Strawberry", "img/desserts/benStrawberry.png", "glace"),';
    sql += '(9,"Box Desserts", "img/desserts/boxDesserts.png", "gateau"),';
    sql += '(10,"Brownies", "img/desserts/brownies.png", "gateau"),';
    sql += '(11,"Chocominos", "img/desserts/chocominos.png", "gateau"),';
    sql += '(12,"Pancakes", "img/desserts/pancakes.png", "tarte")';
    $cordovaSQLite.execute(db, sql);

    //For tests
    sql = 'REPLACE INTO `commandes` (`CMD_ID`, `CMD_TBL_ID`, `CMD_USER_ID`, `CMD_PIZZA_ID`, `CMD_BOIS_ID`, `CMD_DESS_ID`, `CMD_PRET`) VALUES';
    sql += '(1, 1, 1, 0, 0, 0, 0),';
    sql += '(2, 1, 1, 0, 0, 0, 0),';
    sql += '(3, 1, 1, 0, 0, 0, 0),';
    sql += '(5, 1, 1, 1, 2, 3, 0),';
    sql += '(6, 1, 1, 5, 6, 7, 0),';
    sql += '(7, 1, 1, 9, 10, 11, 0),';
    sql += '(8, 1, 1, 13, 14, 15, 0),';
    sql += '(9, 1, 1, 1, 0, 0, 0),';
    sql += '(10, 1, 2, 21, 22, 23, 0),';
    sql += '(11, 1, 2, 25, 26, 27, 0),';
    sql += '(12, 1, 2, 29, 30, 31, 0),';
    sql += '(13, 1, 2, 33, 34, 35, 0),';
    sql += '(14, 1, 3, 1, 2, 3, 0),';
    sql += '(15, 1, 3, 3, 4, 5, 0)';
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
    url: '/table:tableID.:tableNum/pizzas',
    templateUrl: 'templates/pizzas.html',
    controller: 'PizzasCtrl'
  })

  // PizzaCustom
  $stateProvider.state('pizzaCustom', {
    url: '/table:tableID.:tableNum/pizzaCustom:pizzaID',
    templateUrl: 'templates/pizzaCustom.html',
    controller: 'PizzaCustomCtrl'
  })

  // Boissons
  $stateProvider.state('boissons', {
    url: '/table:tableID.:tableNum/boissons',
    templateUrl: 'templates/boissons.html',
    controller: 'BoissonsCtrl'
  })

  // Desserts
  $stateProvider.state('desserts', {
    url: '/table:tableID.:tableNum/desserts',
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
