(function () {
    'use strict';

    angular.module('BlurAdmin.pages.users', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('users', {
                url: '/users',
                template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
                controller: 'UsersPageCtrl',
                title: 'Users',
                sidebarMeta: {
                    icon: 'ion-gear-a',
                    order: 1
                }
            })
            .state('users.create', {
                url: '/create',
                templateUrl: 'app/pages/users/create/create-user.html',
                title: 'Create User',
                sidebarMeta: {
                    order: 3,
                },
            })
            .state('users.management', {
                url: '/update',
                templateUrl: 'app/pages/users/management/management-users.html',
                title: 'Management Users',
                sidebarMeta: {
                    order: 4,
                },
            });
        //$urlRouterProvider.when('/article-management', '/article-management/list');

    }
})();