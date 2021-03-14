(function () {
    'use strict';

    angular.module('BlurAdmin.pages.articleManagement', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider.state('articleManagement', {
            url: '/article-management',
            templateUrl: 'app/pages/articleManagement/article-management.html',
            title: 'Article Management',
            sidebarMeta: {
                icon: 'ion-gear-a',
                order: 1
            }
        });
    }
})();