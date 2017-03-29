angular.module('app.adminUnit').config(['RestCallProvider', function (RestCallProvider) {

	RestCallProvider.setUrlConfig("http://192.168.1.215:8080/addressService_gg/core/");

	console.log("Provider Initialized");

}]);