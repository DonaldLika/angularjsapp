(function () {
    'use strict';

    angular.module('app.preloader')
        .directive('app-preloader',
            ['$state',
            function ($state,$windowProvider,$q) {

                var directive = {
                    restrict: 'EAC',
                    template: '<div ui-view></div>',
                    link: link
                };
                return directive;

      
                function link(scope, el) {


                    



                    scope.$on('event:auth-loginRequired', function () {
                         console.log("hello1");
                        $state.go('login');

                    });
                    scope.$on('event:auth-loginConfirmed', function () {
                        console.log("hello1");
                        $state.go('dashboard');               
                    });

                    scope.$on('event:auth-loginCancelled', function(){
                         console.log("hello1");
                         $state.go('login');
                    });

                } 
            }]);
})();