angular.module('guestListApp.guests.directives.add', [])
    .directive('addGuest', [function() {
        return {
            restrict: 'E',
            templateUrl: 'guests/add-guest.tpl.html',
            controller: 'guestAddController'
        }
    }])
    .controller('guestAddController', [
        '$scope',
        function($scope) {
            $scope.name = 'Guest1';
        }
    ]);
