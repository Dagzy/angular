angular.module('myApp')

.controller('ShoppingListController', ['$scope', 'ShoppingListItems', function($scope, ShoppingListItems){
	var shoplist = $scope;
	//controller is being called, shoplist has attributes assigned
	shoplist.items = ShoppingListItems.getList();
	shoplist.addItem = function(newItem){
		shoplist.items.push([
			name: shoplist.newItem.name,
			qty: shoplist.newItem.qty,
			priority: shoplist.newItem.priority
			])
	};
	shoplist.removeItem = function(item){
		var removeItem = shoplist.item.indexOf(item);
		shoplist.item.splice(removeItem, 1)
	}
	shoplist.removeAll = function(){
		shoplist.items = [];
	}
}]);