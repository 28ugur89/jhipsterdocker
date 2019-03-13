(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('ReservationDetailController', ReservationDetailController);

    ReservationDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Reservation'];

    function ReservationDetailController($scope, $rootScope, $stateParams, previousState, entity, Reservation) {
        var vm = this;

        vm.reservation = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jhipsterApp:reservationUpdate', function(event, result) {
            vm.reservation = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
