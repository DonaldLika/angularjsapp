
(function() {
    'use strict';

    angular
        .module('app', [
            'app.routes',
            'app.translate',
            'app.auth',
            'app.adminUnit',
            'app.municipality',
            'app.villages',
            'app.version',
            'app.preloader'
        ]);
})();
