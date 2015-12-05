angular.module('guestListApp.guests.directives.add', [])
    .directive('addGuest', [function() {
        return {
            restrict: 'E',
            templateUrl: 'guests/guest-add.tpl.html',
            controller: 'guestAddController'
        }
    }])
    .controller('guestAddController', [
        '$scope','GuestService',
        function($scope, GuestService) {
            $scope.name = '';
            $scope.email = '';
            $scope.categories = '';


            $scope.searchForSuggestion = function() {

            };


            $scope.save = function() {
                var categories = $scope.categories.split(',');
                var newGuest = new GuestService({name:$scope.name,email:$scope.email,categories:categories});
                GuestService.save(newGuest, function(){
                    $scope.name = '';
                    $scope.email = '';
                    document.getElementById('add_guest_name').focus();
                });
            }


        }
    ]);
