
(function () {

    'use strict'
    angular.module('BlurAdmin.pages.articles')
        .controller('ArticlesPageCtrl', ArticlesPageCtrl);

    /** @ngInject */
    function ArticlesPageCtrl($scope, $http, $timeout, $element) {
        var vm = $scope;
        var dataService = $http;
        var apiUrl = 'https://www.crownchung.tw/api/web/articles';
        //var apiUrl = 'https://localhost:44321/api/web/articles';

        var method = 'GET';

        var self = this;
        self.items = [];

        $scope.smartTablePageSize = 10;

        $http.get(apiUrl).then(function (response) {
            $scope.articlesData = response.data;
        }, function (errResponse) {
            console.log('errResponse=', errResponse);
        })

        if (self.items !== undefined) {
            $scope.articlesData = self.items;
        }

        var testGuid = '2f81cee8-cf15-48b0-bd07-d6bfaf8092e3';
        var articleUrl = 'https://www.crownchung.tw/api/web/article/' + testGuid; 
        var requestBody;
        dataService.get(articleUrl).then(function (response) {
            vm.articleDetail = response.data;
            requestBody = response.data;
        }, function (errResponse) {
        });

        vm.update = function () {
            //requestBody.title = '1234'
            var putUrl = 'https://www.crownchung.tw/api/web/article/' + requestBody.id;
            //var putUrl = 'https://localhost:44321/api/web/article/' + requestBody.id;

            $http.put(putUrl, requestBody).then(function (response) {
                console.log('update sucess');
            }, function error(errResponse) {
                console.log('errResponse' + errResponse)
            });
        }


        //vm.update = function () {

        //    requestBody.title = '1234'
        //    var putUrl = 'https://www.crownchung.tw/api/web/article/' + requestBody.id;
        //    //var putUrl = 'https://localhost:44321/api/web/article/' + requestBody.id;

        //    $http.jsonp(putUrl).then(function success(response) {
        //        //$scope.geoData = response.data;
        //        //$scope.updateWeather();
        //        console.log('update sucess');

        //    }, function error(errResponse) {
        //        console.log('errResponse' + errResponse)
        //    });
        //}

        function updateGeoData() {
            $http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK').then(function success(response) {
                $scope.geoData = response.data;
                $scope.updateWeather();
            }, function error() {
                console.log("GEO FAILED")
            });
        }

        //$scope.updateArticles= function () {
        //    $http({
        //        method: method, url: apiUrl
        //    }).then(function success(response) {
        //        //saveWeatherData(response.data);
        //        //makeChart($scope.weather.days[$scope.weather.current].timeTemp)
        //        $scope.testData = response.data;
        //    }, function error() {
        //        console.log("WEATHER FAILED")
        //    });
        //};

        //var ArticlesData = appse
        //$scope.articlesData = [
        //    {
        //        id: 4,
        //        firstName: 'John',
        //        lastName: 'Snow',
        //        username: '@snow',
        //        email: 'snow@gmail.com',
        //        age: '20'
        //    },
        //    {
        //        id: 5,
        //        firstName: 'Jack',
        //        lastName: 'Sparrow',
        //        username: '@jack',
        //        email: 'jack@yandex.ru',
        //        age: '30'
        //    },
        //    {
        //        id: 6,
        //        firstName: 'Ann',
        //        lastName: 'Smith',
        //        username: '@ann',
        //        email: 'ann@gmail.com',
        //        age: '21'
        //    },
        //    {
        //        id: 7,
        //        firstName: 'Barbara',
        //        lastName: 'Black',
        //        username: '@barbara',
        //        email: 'barbara@yandex.ru',
        //        age: '43'
        //    },
        //    {
        //        id: 8,
        //        firstName: 'Sevan',
        //        lastName: 'Bagrat',
        //        username: '@sevan',
        //        email: 'sevan@outlook.com',
        //        age: '13'
        //    }
        //];
    }
})();