angular
  .module('guestListApp.users.directives.listGuests', [])
  .directive('listGuests', [function() {
    return {
      restrict: 'E',
      templateUrl: 'users/list-guests.tpl.html',
      controller: 'listGuestsController'
    }
  }])
  .controller('listGuestsController', [
    '$scope',
    function($scope) {
      $scope.name = 'Guest1';
    }
  ])