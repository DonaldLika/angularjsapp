angular.module('app.auth').factory('LoginService', function ($http, $q,$httpParamSerializer,$window) {

        var loginUrl= 'http://192.168.1.215:8080/addressService_gg/authentication/login';

        var logoutUrl= 'http://192.168.1.215:8080/addressService_gg/authentication/logOut/';

        var logginedUser;

        var loginCall=function (url,data) {
                     var deferred = $q.defer();   
                     $http.post(url, data)
                           .then(function (response) {
                            if (response.status<=400 && response.data.data.token !=null) {                       
                            logginedUser = {
                                userName: data.username,
                                token: response.data.data.token
                            };                          
                            $window.sessionStorage["logginedUser"] = JSON.stringify(logginedUser);
                            deferred.resolve(logginedUser); 
                            } else {           
                                deferred.reject(response.data);
                            }
                        }, function (response) {
                            deferred.reject(response.data);
                        });
                      return deferred.promise;;
        };


         var logoutCall=function () {
                     var deferred = $q.defer();
                     $http.post(logoutUrl+logginedUser.token)
                           .then(function (response) {                            
                            if (response.status<=400) {
                                logginedUser = null;
                                $window.sessionStorage["logginedUser"] = null;
                            deferred.resolve(logginedUser); 
                            } else {           
                                deferred.reject(response.data);
                            }

                        }, function (response) {
                            deferred.reject(response.data);
                        });
                      return deferred.promise;;
        };
        
        function getLogginedUser() {
            return logginedUser;
        };

        function init() {
                if ($window.sessionStorage["logginedUser"]) {
                    logginedUser = JSON.parse($window.sessionStorage["logginedUser"]);
                }
        };

        init();

        return {
            login: function(data)
            {
                 return loginCall(loginUrl,data);
            },          
            getUser : function()
            {
              return getLogginedUser();
            },
            logout: function()
            {
                return logoutCall();
            }
        };
    });
