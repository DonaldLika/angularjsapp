'use strict';
angular
  .module('app.routes')
  .config(function($locationProvider,$stateProvider, $urlRouterProvider,$windowProvider) {


    $urlRouterProvider.otherwise('/login');

   $locationProvider.html5Mode(false);

    $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'template/pages/login.html',
          controller: 'AuthController'
        })
         .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'template/dashboardtemplate.html',
          controller: 'AuthController',
           resolve: {
            auth: function ($q) {
                var userInfo = getLogginedUser();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                    return $q.reject({ authenticated: false });
                }
            }
        }
        })
        .state('main', {
          url: '/main',
          parent: 'dashboard',
          templateUrl: 'views/dashboard/main.html'
        })
        .state('dashboard.adminunits', {
          url: '/adminunits',
          parent: 'dashboard',
          templateUrl: 'views/administrationunit/administrationunits.html',
          controller: 'AdminUnitsController'
        })
        .state('dashboard.municipalities', {
          url: '/municipalities',
          parent: 'dashboard',
          templateUrl: 'views/municipalities/municipalities.html',
          controller: 'MunicipalityController'

        })
         .state('dashboard.buildings', {
          url: '/buildings',
          parent: 'dashboard',
          templateUrl: 'views/dashboard/postalcodes.html',
          controller: 'PostalController'
        });


       function getLogginedUser()
       {
          var user;
          if ($windowProvider.$get().sessionStorage["logginedUser"]!=null) {
            user = JSON.parse($windowProvider.$get().sessionStorage["logginedUser"]);
          }
          return user;
       };


  });
