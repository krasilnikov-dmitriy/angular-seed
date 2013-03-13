'use strict';


// Declare app level module which depends on filters, and services
angular.module('uptime', ['checkFilters', 'checkServices']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/checks', {templateUrl: 'partials/check-list.html', controller: CheckListCtrl});
    $routeProvider.when('/checks/:checkId', {templateUrl: 'partials/check-detail.html', controller: CheckDetailCtrl});
    $routeProvider.otherwise({redirectTo: '/checks'});
  }]);
