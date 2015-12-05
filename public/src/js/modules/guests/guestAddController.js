angular.module('guestListApp.guests.directives.add', [])
    .directive('guestAdd', [function() {
        return {
            restrict: 'E',
            templateUrl: 'guests/guest-add.tpl.html',
            controller: 'guestAddController'
        }
    }])
    .controller('guestAddController', [
        '$scope',
        function($scope) {
            $scope.name = 'Guest1';
        }
    ]);
