angular.module('starter.services', [])

.factory('Pizzas', function() {
	
  // Pizzas data
  var pizzas = [{
    id: 0,
    name: 'Bacon Groovy',
    url: 'img/pizzas/baconGroovy.png'
  }, {
    id: 1,
    name: 'Cannibale',
    url: 'img/pizzas/cannibale.png'
  }, {
    id: 2,
    name: 'Composee',
    url: 'img/pizzas/composee.png'
  }, {
    id: 3,
    name: 'Divine Pepper',
    url: 'img/pizzas/divinePepper.png'
  }, {
    id: 4,
    name: 'Cannibale',
    url: 'img/pizzas/cannibale.png'
  }, {
    id: 5,
    name: 'Extravaganzza',
    url: 'img/pizzas/extravaganzza.png'
  }, {
    id: 6,
    name: 'Forestiere',
    url: 'img/pizzas/forestiere.png'
  }, {
    id: 7,
    name: 'Original Moutarde',
    url: 'img/pizzas/originalMoutarde.png'
  }, {
    id: 8,
    name: 'Pepperoni',
    url: 'img/pizzas/pepperoni.png'
  }, {
    id: 9,
    name: '4 fromages',
    url: 'img/pizzas/quatreFromages.png'
  }, {
    id: 10,
    name: 'Raclette',
    url: 'img/pizzas/raclette.png'
  }, {
    id: 11,
    name: 'Saumoneta',
    url: 'img/pizzas/saumoneta.png'
  }, {
    id: 12,
    name: 'Savoyarde',
    url: 'img/pizzas/savoyarde.png'
  }, {
    id: 13,
    name: 'Sublim Curry',
    url: 'img/pizzas/sublimCurry.png'
  }, {
    id: 14,
    name: 'Chevre',
    url: 'img/pizzas/sweetChevre.png'
  }];

  return {
    all: function() {
      return pizzas;
    },
    remove: function(pizza) {
      pizzas.splice(pizzas.indexOf(pizza), 1);
    },
    get: function(pizzaId) {
      for (var i = 0; i < pizzas.length; i++) {
        if (pizzas[i].id === parseInt(pizzaId)) {
          return pizzas[i];
        }
      }
      return null;
    }
  };
})

.factory('Boissons', function() {
	
  // Boissons data
  var boissons = [{
    id: 0,
    name: 'Coca Cola',
    url: 'img/boissons/coca.png'
  }, {
    id: 1,
    name: 'Coca Cola Cherry',
    url: 'img/boissons/cocaCherry.png'
  }, {
    id: 2,
    name: 'Coca Cola Zero',
    url: 'img/boissons/cocaZero.png'
  }, {
    id: 3,
    name: 'Evian',
    url: 'img/boissons/evian.png'
  }, {
    id: 4,
    name: 'Fanta',
    url: 'img/boissons/fanta.png'
  }, {
    id: 5,
    name: 'Bière',
    url: 'img/boissons/heineken.png'
  }, {
    id: 6,
    name: 'Ice Tea',
    url: 'img/boissons/nestea.png'
  }, {
    id: 7,
    name: 'Oasis',
    url: 'img/boissons/oasis.png'
  }];

  return {
    all: function() {
      return boissons;
    },
    remove: function(boisson) {
      boissons.splice(boissons.indexOf(boisson), 1);
    },
    get: function(boissonId) {
      for (var i = 0; i < boissons.length; i++) {
        if (boissons[i].id === parseInt(boissonId)) {
          return boissons[i];
        }
      }
      return null;
    }
  };
})

.factory('Desserts', function() {
	
  // Desserts data
  var desserts = [{
    id: 0,
    name: 'Beignets Chocolat-Noisette',
    url: 'img/desserts/beignetsChocoNoisette.png'
  }, {
    id: 1,
    name: 'Ben&Jerrys Brownie',
    url: 'img/desserts/benBrownie.png'
  }, {
    id: 2,
    name: 'Ben&Jerrys Caramel',
    url: 'img/desserts/benCaramel.png'
  }, {
    id: 3,
    name: 'Ben&Jerrys Chunky Monkey',
    url: 'img/desserts/benChunkyMonkey.png'
  }, {
    id: 4,
    name: 'Ben&Jerrys Coco Brownie',
    url: 'img/desserts/benCocoBrownie.png'
  }, {
    id: 5,
    name: 'Ben&Jerrys Cookie Dough',
    url: 'img/desserts/benCookieDough.png'
  }, {
    id: 6,
    name: 'Ben&Jerrys Fairly Nuts',
    url: 'img/desserts/benFairlyNuts.png'
  }, {
    id: 7,
    name: 'Ben&Jerrys Peanut Butter',
    url: 'img/desserts/benPeanutButter.png'
  }, {
    id: 8,
    name: 'Ben&Jerrys Strawberry',
    url: 'img/desserts/benStrawberry.png'
  }, {
    id: 9,
    name: 'Box Desserts',
    url: 'img/desserts/boxDesserts.png'
  }, {
    id: 10,
    name: 'Brownies',
    url: 'img/desserts/brownies.png'
  }, {
    id: 11,
    name: 'Chocominos',
    url: 'img/desserts/chocominos.png'
  }, {
    id: 12,
    name: 'Pancakes',
    url: 'img/desserts/pancakes.png'
  }];

  return {
    all: function() {
      return desserts;
    },
    remove: function(dessert) {
      desserts.splice(desserts.indexOf(dessert), 1);
    },
    get: function(dessertId) {
      for (var i = 0; i < desserts.length; i++) {
        if (desserts[i].id === parseInt(dessertId)) {
          return desserts[i];
        }
      }
      return null;
    }
  };
})

.factory('Commandes', function() {
	
  // Commandes data
  var commandes = [{
    id: 0,
    name: 'Table 1 - Zone 2',
	content: ['Margarita'],
	add: ['Coca Cola']
  }, {
    id: 1,
    name: 'Table 2 - Zone 2',
    content: ['Margarita + :', 'Supp Fromage'],
	add: ['Coca Cola']
  }, {
    id: 2,
    name: 'Table 3 - Zone 4',
    content: ['Perso :', 'Sauce Tomate', 'Emmental', 'Olive', 'Peperroni', '--------', 'Margarita', '--------', 'Peperroni'],
	add: ['Coca Cola', 'Ice Tea', 'Pepsi']
  }, {
    id: 3,
    name: 'Table 4 - Zone 3',
    content: ['Perso :','Sauce Tomate', 'Olive' ,'Oignons', 'Merguez', '--------', 'Rejon', '--------', 'Tartiflette', '--------', 'Tropical'],
	add: ['Ice Tea', 'Ben&Jerrys', 'Brownie']
  }, {
    id: 4,
    name: 'Table 3 - Zone 2',
    content: ['Tartiflette'],
	add: ['Brownies']
  }];

  return {
    all: function() {
      return commandes;
    },
    remove: function(commande) {
      commandes.splice(commandes.indexOf(commande), 1);
    },
    get: function(commandeId) {
      for (var i = 0; i < commandes.length; i++) {
        if (commandes[i].id === parseInt(commandeId)) {
          return commandes[i];
        }
      }
      return null;
    }
  };
});

// .factory('nfcService', function ($rootScope, $ionicPlatform) {

	// var tag = {};

	// $ionicPlatform.ready(function() {
	// nfc.addNdefListener(function (nfcEvent) {
			// console.log(JSON.stringify(nfcEvent.tag, null, 4));
			// $rootScope.$apply(function(){
				// angular.copy(nfcEvent.tag, tag);
				// // if necessary $state.go('some-route')
				// });
			// }, function () {
				// console.log("Listening for NDEF Tags.");
			// }, function (reason) {
				// alert("Error adding NFC Listener " + reason);
			// });

		// });

		// return {
			// tag: tag,

			// clearTag: function () {
			// angular.copy({}, this.tag);
		// }
	// };
// });
