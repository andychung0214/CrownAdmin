(function () {
    'use strict';

    angular.module('BlurAdmin.pages.articles', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('articles', {
            url: '/articles',
            template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
            abstract: true,
            controller: 'ArticlesPageCtrl',
            title: 'Articles',
            sidebarMeta: {
                icon: 'ion-gear-a',
                order: 1
            }
            })
            .state('articles.list', {
            url: '/list',
            templateUrl: 'app/pages/articles/list/articles.html',
            title: 'List',
            sidebarMeta: {
                order: 2,
            },
            })
            .state('articles.create', {
            url: '/create',
            templateUrl: 'app/pages/articles/create/create-article.html',
            title: 'Create Article',
            sidebarMeta: {
                order: 3,
            },
            })
            .state('articles.management', {
            url: '/update',
                templateUrl: 'app/pages/articles/management/management-articles.html',
            title: 'Update Article',
            sidebarMeta: {
                order: 4,
            },
        });
        $urlRouterProvider.when('/article-management', '/article-management/list');

    }
})();