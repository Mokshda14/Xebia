myApp.controller('CTRL_Details', function($scope, SRVC_Cart, item, $modalInstance) {
	$scope.item = item;
	$scope.size = item.p_selected_size.code;
	$scope.qty = item.p_quantity;
	$scope.quantity = [{'name':'1'},
	                   {'name':'2'},
	                   {'name':'3'},
	                   {'name':'4'},{'name':'5'}];
	$scope.colorSelected = function(color) {
		$scope.item.p_selected_color = color
	}
	$scope.addToBag = function() {
		$scope.item;
		$scope.item.p_price = parseInt($scope.qty) * $scope.item.p_price;
		$modalInstance.close($scope.item);
	}
	$scope.sizeSelected = function(size) {
		
		for(var i=0;i<$scope.item.p_available_options.sizes.length;i++) {
			if($scope.item.p_available_options.sizes[i].code === size)
			$scope.item.p_selected_size = $scope.item.p_available_options.sizes[i];
		}
		//$scope.item.p_selected_size = size;
	}
	$scope.qtySelected = function(qty) {
		$scope.item.p_quantity = qty;
	}
});