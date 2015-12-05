angular.module('guestListApp.guests.service', [])
    .service('GuestService', ['$resource', function ($resource) {
        var GuestsService = $resource('/api/guests?name=:name', {
                name: '@name'
            }
            , {
                fetchAll: {
                    method: 'GET',
                    isArray: true
                }
            });


        return GuestsService;
    }]);