

(function () {

    'use strict'
    angular.module('BlurAdmin.pages.users')
        .controller('UsersPageCtrl', UsersPageCtrl);

    /** @ngInject */
    function UsersPageCtrl($scope, $http, $timeout, $element) {
        var vm = $scope;
        var dataService = $http;
        var apiUrl = 'https://www.crownchung.tw/api/web/getarticles';
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

        vm.setCookie = function () {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        };

        vm.create = function () {
            var url = 'https://localhost:44321/api/web/member';
            //var url = 'https://www.crownchung.tw/api/web/member';

            setCookie("crownAdminUser", 'amtea', 1);
            setCookie("crownAdminPwd", '02141012', 1);

            var requestBody = {
                user: getCookie('crownAdminUser'),
                password: getCookie('crownAdminPwd')
            };

            var getTokenUrl = 'https://localhost:44321/api/Authenticate?user=' + requestBody.user + '&pwd=' + requestBody.password;
            var token;
            $http.get(getTokenUrl).then(function (response) {
                token = response.data.token;
                if (token !== undefined) {

                    $http.post(url, requestBody, { headers: { Authorization: token } }).then(function (response) {
                        console.log('update sucess');
                    }, function error(errResponse) {
                        console.log('errResponse', errResponse)
                    });
                }
            }, function error(errResponse) {
                console.log('get token errResponse', errResponse)
            });


            
        }
        $scope.users = [
            {
                id: 1,
                name: 'guest',
                password: 'guest',
                status: true
            },
            {
                id: 2,
                name: 'admin',
                password: '02141012',
                status: false
            }
        ]

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

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function checkCookie() {
        var user = getCookie("username");
        if (user != "") {
            alert("Welcome again " + user);
        } else {
            user = prompt("Please enter your name:", "");
            if (user != "" && user != null) {
                setCookie("username", user, 365);
            }
        }
    }
})();