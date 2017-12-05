myApp.controller('CTRL_Search', function($scope, SRVC_Search, $state, $sessionStorage, $interval) {

	$scope.planetList = [];
	$scope.isLoaded = false;
	$scope.counter = 0;
	$scope.gridOptions = {
			enablePaginationControls: true,
		    paginationPageSize: 25
	};
	$scope.isSearched = false;
	$scope.gridOptions.data = $scope.tags;
	$scope.gridOptions.columnDefs = [
	{ field: 'name'},
	{ field: 'population'},
	{ field: 'climate'},
	{ field: 'gravity'},
	{ field: 'terrain'},
	{ field: 'rotation_period'},
	{ field: 'orbital_period'}
	];
	
	$interval(function() {
        $scope.counter = 0;
      }, 60000);

	$scope.loadPlanets = function($query) {
		   return SRVC_Search.getPlanetDetails()
		   .then(function(planetList) {
		       var planetList = planetList;
		     return planetList.filter(function(planet) {
		       return planet.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
		     });
		   });
		 };
	$scope.tags = [];
	if(!$sessionStorage.name) {
		$state.go('login');
	}
	$scope.tagsChanged = function() {
		$scope.counter++;
		if($sessionStorage.name !== "Luke Skywalker")
		if($scope.counter>1){
			$scope.tags.length = 0;
		}
		$scope.gridOptions.data = $scope.tags;
	}
	$scope.logOut = function() {
		$sessionStorage.name = "";
		$state.go('login');
	}
	$scope.searched = function() {
		$scope.isSearched = true;
	}
	

	
});
