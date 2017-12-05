myApp = angular.module('myApp',['ui.router','ui.bootstrap', 'ui.bootstrap.typeahead', 'ngStorage', 'ngTagsInput', 'ngTouch', 'ui.grid']);

myApp
.config(function ($stateProvider, $urlRouterProvider) {

    
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'login/prtl_login.html',
            controller: 'CTRL_LogIn',
            params: {
            	"name":""
            }
        })
        .state('search', {
            url: '/search',
            templateUrl: 'search/prtl_search.html',
            controller: 'CTRL_Search'
        });
        $urlRouterProvider.otherwise(function($injector, $location) {
            console.log("Could not find " + $location);
            $location.path('/login');
        });
        
})
.run();