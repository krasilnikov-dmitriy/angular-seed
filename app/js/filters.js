'use strict';

/* Filters */

angular.module('checkFilters', []).filter('check', function() {
    return function(input) {
        alert(input);
        return input ? '\u2713' : '\u2718';
    };
});