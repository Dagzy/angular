//anything inside of square brackets [] is a service that will be included into our application and ngRoute
//is a service built into Angular.

var app = angular.module('myApp', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		
		$routeProvider
		//when a user reaches my root page they will be navigated to the home.html
		.when('/', {
			templateUrl: "views/home.html"
		}).otherwise({
			
			redirectTo: "/home"
		})
		.when('/home', {
			templateUrl: "views/home.html",
			//controller variable is being set, capital C identifies the argument for Angular
			controller: "HomeController"
		})
		.when('shopping-list',{
			templateUrl: "views/shopping-list.html",
			controller: "ShoppingListController",
			//these expressions set the controller variable
			//In ShoppingListController, the capital C identifies the argument for Angular

			controllerAs: "shoplist"
		}).otherwise({
			redirectTo: "/home"
		});

}])