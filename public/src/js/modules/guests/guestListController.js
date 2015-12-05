angular.module('guestListApp.guests.directives.list', [])
    .directive('listGuests', [function() {
        return {
            restrict: 'E',
            templateUrl: 'guests/guest-list.tpl.html',
            controller: 'guestAddController'
        }
    }])
    .controller('guestAddController', [
        '$scope', 'GuestService',
        function($scope, GuestService) {
          $socpe.guests = [];
          GuestService
            .query()
            .then(function(result) {
              result.forEach(function(g) {
                $socpe.guests.push(g);
              });
            })
            .catch(console.error);
        }
    ]);
