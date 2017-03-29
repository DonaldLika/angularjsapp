angular.module('app.adminUnit').provider('RestCall', function () {

        var mainUrl= '';

        this.setUrlConfig=function(url)
        {
            mainUrl=url+'listAdministrationUnits';
        };


        this.$get=['$log','$http','$q', function($log,$http,$q)
        {

            $log.log("U Inicializua");
            var MyService={};
            
            MyService.listAdministrationUnits=function()
            {
                	return $http.get(mainUrl);
            };

            return MyService;

        }];
});
