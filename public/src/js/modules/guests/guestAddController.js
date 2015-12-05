angular.module('guestListApp.guests.directives.add', [])
    .directive('addGuest', [function () {
        return {
            restrict: 'E',
            templateUrl: 'guests/guest-add.tpl.html',
            controller: 'guestAddController'
        }
    }])
    .controller('guestAddController', [
        '$scope', '$timeout', 'GuestService',
        function ($scope, $timeout, GuestService) {
            $scope.name = '';
            $scope.email = '';
            $scope.categories = '';

            $scope.fetchId = 0;

            $scope.searchForSuggestion = function ($event) {
                $scope.fetchId++;
                var fetchId = $scope.fetchId;

                if ($event.keyCode < 65 || $event.keyCode > 90) {
                    return;
                }
                if ($scope.name === '') {
                    return;
                }


                var onFetch = function (guests) {
                    if ($scope.fetchId !== fetchId) {
                        return;
                    }
                    if (guests.length > 0) {
                        var uncompletedName = $scope.name;
                        $scope.name = guests[0].name;
                        $scope.email = guests[0].email;
                        if (uncompletedName.length !== $scope.name.length) {
                            $timeout(function () {
                                var field = document.getElementById('add_guest_name');
                                console.log(uncompletedName.length + ';' + $scope.name.length)
                                $scope.selectRange(field, uncompletedName.length, $scope.name.length);
                            }, 1);
                        }
                    }
                }
                GuestService.fetchAll({name: $scope.name}, onFetch);
            };

            $scope.save = function () {
                var categories = $scope.categories.split(',');
                var newGuest = new GuestService({name: $scope.name, email: $scope.email, categories: categories});
                GuestService.save(newGuest, function () {
                    $scope.name = '';
                    $scope.email = '';
                    document.getElementById('add_guest_name').focus();
                });
            }

            $scope.selectRange = function (field, start, end) {
                if (field.createTextRange) {
                    var selRange = field.createTextRange();
                    selRange.collapse(true);
                    selRange.moveStart('character', start);
                    selRange.moveEnd('character', end);
                    selRange.select();
                    field.focus();
                } else if (field.setSelectionRange) {
                    field.focus();
                    field.setSelectionRange(start, end);
                } else if (typeof field.selectionStart != 'undefined') {
                    field.selectionStart = start;
                    field.selectionEnd = end;
                    field.focus();
                }
            }


        }
    ])
;
