// angular.module('myApp')

// .controller('ShoppingListController', ['$scope', 'ShoppingListItems', function($scope, ShoppingListItems){
// 	var shoplist = $scope;
// 	//controller is being called, shoplist has attributes assigned
// 	shoplist.items = ShoppingListItems.getList();

// 	shoplist.addItem = function(newItem){
// 		shoplist.items.push({
// 			name: shoplist.newItem.name,
// 			qty: shoplist.newItem.qty,
// 			priority: shoplist.newItem.priority
// 			});
// 	shoplist.newItem.name = "";
// 	shoplist.newItem.qty = "";
// 	shoplist.newItem.priority = "";
// 	};

// 	shoplist.removeItem = function(item){
// 		//returns the first index at which a given element can be found in 
// 		//the array, or -1 if it is not present
// 		//The splice() method changes the contents of an array by removing 
// 		//existing elements and/or adding new elements
// 		var removedItem = shoplist.items.indexOf(item);
// 		shoplist.items.splice(removedItem, 1)
// 	};
// 	shoplist.removeAll = function(){
// 		shoplist.items = [];
// 	};
// }]);

angular.module('myApp')

.controller('ShoppingListController', ['$scope', 'ShoppingListItems', function($scope, ShoppingListItems){
    var shoplist = $scope;
    shoplist.items = ShoppingListItems.getList();
    shoplist.addItem = function(newItem) {

       shoplist.items.push({
            name: shoplist.newItem.name,
            qty: shoplist.newItem.qty,
            priority: shoplist.newItem.priority
        });

        shoplist.newItem.name = "";
        shoplist.newItem.qty = "";
        shoplist.newItem.priority = "";
    };

   shoplist.removeItem = function(item) {
        var removedItem = shoplist.items.indexOf(item);
        shoplist.items.splice(removedItem, 1);
    };

   shoplist.removeAll = function() {
        shoplist.items = [];
        ShoppingListItems.removeAll();
    }
}]);
//   shoplist.removeAll = function() {
//        shoplist.items.splice(0,shoplist.items.length-1,{
//          foo:2,
        // shoplist.items.splice(0);
