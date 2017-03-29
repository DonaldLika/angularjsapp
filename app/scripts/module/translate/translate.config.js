(function() {
    'use strict';

    angular
        .module('app.translate')
        .config(translateConfig);


    function translateConfig($translateProvider){

      $translateProvider.useStaticFilesLoader({
          prefix: '/internationalization/',
          suffix : '.json'
      });
      $translateProvider.preferredLanguage('en');
      $translateProvider.useLocalStorage();
      $translateProvider.usePostCompiling(true);

    }
})();
