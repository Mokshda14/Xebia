myApp.controller('CTRL_LogIn', function($scope, SRVC_LogIn, $modal, $state, $sessionStorage) {
	$scope.subtotal = 0;
	$scope.promotion = 0;
	$scope.shipping = 'FREE';
	$scope.total = 0;
	$scope.quantity = 0;
	var discount = 0;
	$scope.personList = [];
	SRVC_LogIn.getPersonDetails()
    .then(function(personList) {
        $scope.personList = personList.results;
    },
    function(data) {
        console.log('person retrieval failed.')
    });
	$scope.logInCheck = function() {
		calculation();
	}
	var modalInstance = {};
	
	$scope.edit = function(item) {

		      modalInstance = $modal.open({
		      templateUrl: 'details/prtl_details.html',
		      controller: 'CTRL_Details',
		      resolve: {
		          item: function() {
		            return item;
		          }
		        }
		    });
		      
		      modalInstance.result.then(function (selectedItem) {
				  for(var i=0; i<$scope.cartList.length; i++) {
					  if($scope.cartList[i].p_id == selectedItem.p_id) {
						  $scope.cartList[i] = selectedItem; 
					  }
				  }
				  calculation();
				}, function () {
				});
		 
	}
	
	
	
	function calculation() {
		var index = _.findIndex($scope.personList, {'name':$scope.name});
		if(index === -1) {
			alert("Name is not available in database");
		}
		else {
			if($scope.personList[index].birth_year !== $scope.passcode) {
				alert("Passcode in incorrect Mr. "+$scope.name);
			}
			else {
				$sessionStorage.name = $scope.name;
				$state.go('search');
			}
		}
	}
	
});
