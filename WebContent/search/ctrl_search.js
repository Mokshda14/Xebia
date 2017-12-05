myApp.controller('CTRL_Search', function($scope, SRVC_Search, $modal, $state, $sessionStorage) {

	$scope.planetList = [];
	$scope.isLoaded = false;
	$scope.gridOptions = {};
	$scope.gridOptions.data = $scope.tags;
	$scope.tags = [];
	if(!$sessionStorage.name) {
		$state.go('login');
	}
	$scope.tagsChanged = function() {
		$scope.gridOptions.data = $scope.tags;
	}
	$scope.logOut = function() {
		$sessionStorage.name = "";
		$state.go('login');
	}
	SRVC_Search.getPlanetDetails()
    .then(function(planetList) {
        $scope.planetList = planetList;
        $scope.isLoaded = true;
    },
    function(data) {
        console.log('person retrieval failed.')
    });

	
});
