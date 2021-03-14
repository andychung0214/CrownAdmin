(function () {
    'use strict';

    angular.module('BlurAdmin.pages.userManagement', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider.state('userManagement', {
            url: '/user-management',
            templateUrl: 'app/pages/userManagement/user-management.html',
            title: 'User Management',
            sidebarMeta: {
                icon: 'ion-gear-a',
                order: 0
            }
        })
    }
})();