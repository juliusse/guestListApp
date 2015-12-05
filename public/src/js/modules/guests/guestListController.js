angular.module('guestListApp.guests.directives.list', [])
    .directive('listGuests', [function() {
        return {
            restrict: 'E',
            templateUrl: 'guests/guest-list.tpl.html',
            controller: 'guestAddController'
        }
    }])
    .controller('guestAddController', [
        '$scope',
        function($scope) {
            $scope.name = 'Guest1';
        }
    ]);
