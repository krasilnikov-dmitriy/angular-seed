'use strict';

/* Services */

angular.module('checkServices', ['ngResource']).
    factory('Check', function($resource){
        return $resource('checks/:checkId.json', {}, {
            query: {method:'GET', params:{checkId:'checks'}, isArray:true}
        });
    });