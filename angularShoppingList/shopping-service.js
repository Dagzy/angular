angular.module('myApp')

.factory('ShoppingListItems', function(){
	var items = [];
	function getList(){
		return items;
	}
	//How do we debug this?
	function removeAll(){
		items = [];

	}

	return {
		getList: getList,
		removeAll: removeAll

	}
});