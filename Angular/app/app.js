'use strict';

// Declare app level module which depends on views, and components
var myApp =  angular.module('myApp', [
  'log',

  'ngRoute',
  'myApp.view2',
  'myApp.version',
]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');
//   $routeProvider.otherwise({redirectTo: 'log'});
// }]);
myApp.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
    // 配置路由重定向,默认返回到主页
        .otherwise('view/log');
  }
])
myApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/index');
  $stateProvider
      .state('index', {
        url: '/index',
        views: {
          '': {
            templateUrl: 'view/log.html'
          },
          'main@index': {
            templateUrl: 'view/log.html'
          }
        }
      })
});