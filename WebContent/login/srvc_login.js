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

            $http.get("./data/people.json")
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