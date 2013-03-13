'use strict';

/* Controllers */

function CheckListCtrl($scope, Check) {
    $scope.checks = Check.query();
    $scope.orderProp = 'name';
}


function CheckDetailCtrl($scope, $routeParams, Check) {
    $scope.check = Check.get({checkId: $routeParams.checkId}, function(check) {
    });
}