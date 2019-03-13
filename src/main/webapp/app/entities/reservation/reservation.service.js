'use strict';

angular.module('jhipsterApp').factory('ReservationService', ['$http', '$q', function($http, $q){
    var splitUrl = window.location.href.split('/#/')[0];
    var REST_SERVICE_URI = splitUrl + '/api/customers/';
    var REST_SERVICE_URI2 = splitUrl + '/api/reservations/';
    var REST_SERVICE_URI3 = splitUrl + '/api/books/';





    var factory = {
        fetchAllReservations: fetchAllReservations,
        createReservation: createReservation,
        updateReservation:updateReservation,
        deleteReservation:deleteReservation,
        fetchAllNumbers: fetchAllNumbers,
        fetchAllNumbersBook:fetchAllNumbersBook

    };

    return factory;

    function fetchAllReservations() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching Reservations');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }


    function fetchAllNumbers() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI2)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching Reservations');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function fetchAllNumbersBook() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI3)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching Reservations');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }






    function createReservation(reservation) {
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI, reservation)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while creating Reservation');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }


    function updateReservation(reservation, id) {
        var deferred = $q.defer();
        $http.put(REST_SERVICE_URI+id, reservation)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while updating Reservation');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function deleteReservation(id) {
        var deferred = $q.defer();
        $http.delete(REST_SERVICE_URI+id)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while deleting Reservation');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

}]);/**
 *
 */
