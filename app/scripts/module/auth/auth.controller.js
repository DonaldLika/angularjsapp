angular.module('app.auth')
.controller('AuthController', ['$location','$scope','$q','LoginService','authService',function($location,$scope,$q,LoginService,authService) {


	 $scope.userInfo=LoginService.getUser();

	$scope.login=function()
	{
		$scope.error = false;
		LoginService.login($scope.logindata).then(function (result) {

				authService.loginConfirmed();		
                $location.path('/dashboard');
            }, function (error) {
            		$scope.error = true;
                console.log(error);
           });
	};


	$scope.logout=function()
	{
		if(LoginService.logout())
		{
						authService.loginCancelled();
					 	$location.path('/login');
		}
	};

}]);
