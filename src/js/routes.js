var app = angular.module('angularjsframework',[]).config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
        when('/',{templateUrl: './templates/main.html'}).
        when('/learnangularjs', {templateUrl: './templates/learn.html', controller : linkCtrl}).
        when('/modulesangularjs', {templateUrl: '/templates/modules.html', controller : modulesCtrl}).
        when('/articlesangularjs', {templateUrl: '/templates/article.html', controller : articleBlogCtrl}).
        when('/examplesangularjs', {templateUrl: '/templates/fiddle.html', controller : fiddleCtrl}).
        when('/stackoverflowangularjs', {templateUrl: '/templates/stackoverflowquestions.html', controller : stackoverflowCtrl})
        .otherwise({redirectTo : '/'});
});