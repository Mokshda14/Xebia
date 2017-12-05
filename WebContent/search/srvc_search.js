myApp.factory('SRVC_Search', function($http, $q) {
        // interface
        var service = {
        	planetList: [],
        	getPlanetDetails: getPlanetDetails
        };
        return service;

        // implementation
        
        function getPlanetDetails() {
            var def = $q.defer();

            $http.get("./data/planets.json")
                .success(function(data) {
                    service.planetList = data.results;
                    def.resolve(service.planetList);
                })
                .error(function() {
                    def.reject("Failed to get albums");
                });
            return def.promise;
        }
    });