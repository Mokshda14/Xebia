myApp.factory('SRVC_LogIn', function($http, $q) {
        // interface
        var service = {
        	personList: [],
        	getPersonDetails: getPersonDetails
        };
        return service;

        // implementation
        function getPersonDetails() {
            var def = $q.defer();

            $http.get("https://swapi.co/api/people/")
                .success(function(data) {
                    service.personList = data.results;
                    def.resolve(data);
                })
                .error(function() {
                    def.reject("Failed to get albums");
                });
            return def.promise;
        }
    });