'use strict';

angular.module('jhipsterApp').factory('BookService', ['$http', '$q', function($http, $q){

    var splitUrl = window.location.href.split('/#/')[0];
    var REST_SERVICE_URI = splitUrl + '/api/books/';

    var factory = {
        fetchAllBooks: fetchAllBooks,
        createBook: createBook,
        updateBook:updateBook,
        deleteBook:deleteBook
    };

    return factory;

    function fetchAllBooks() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching Books');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function createBook(book) {
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI, book)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while creating Book');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }


    function updateBook(book, id) {
        var deferred = $q.defer();
        $http.put(REST_SERVICE_URI+id, book)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while updating Book');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function deleteBook(id) {
        var deferred = $q.defer();
        $http.delete(REST_SERVICE_URI+id)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while deleting Book');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

}]);
