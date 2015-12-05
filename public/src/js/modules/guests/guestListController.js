angular
    .module('guestListApp.guests.directives.list', [])
    .directive('guestList', [function() {
        return {
            restrict: 'E',
            templateUrl: 'guests/guest-list.tpl.html',
            controller: 'guestListController'
        }
    }])
    .controller('guestListController', [
        '$scope', 'GuestService',
        function($scope, GuestService) {
          $scope.guests = [];
          GuestService
            .query()
            .$promise
            .then(function(result) {
              result.forEach(function(g) {
                $scope.guests.push(g);
              });
            })
            .catch(console.error);
        }
    ]);
