'use strict';
 
angular.module('jhipsterApp')
.controller('BookController', ['$scope', 'BookService', function($scope, BookService) {
    var self = this;
    self.book={id:null,name:'',writer:'',year:''};
    self.books=[];
 
    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;
 
 
    fetchAllBooks();
 
    function fetchAllBooks(){
        BookService.fetchAllBooks()
            .then(
            function(d) {
                self.books = d;
            },
            function(errResponse){
                console.error('Error while fetching Books');
            }
        );
    }
 
    function createBook(book){
        BookService.createBook(book)
            .then(
            fetchAllBooks,
            function(errResponse){
                console.error('Error while creating Book');
            }
        );
    }
 
    function updateBook(book, id){
        BookService.updateBook(book, id)
            .then(
            fetchAllBooks,
            function(errResponse){
                console.error('Error while updating Book');
            }
        );
    }
 
    function deleteBook(id){
        BookService.deleteBook(id)
            .then(
            fetchAllBooks,
            function(errResponse){
                console.error('Error while deleting Book');
            }
        );
    }
 
    function submit() {
        if(self.book.id===null){
            console.log('Saving New Book', self.book);
            createBook(self.book);
        }else{
            updateBook(self.book, self.book.bookId);
            console.log('Book updated with id ', self.book.id);
        }
        reset();
    }
 
    function edit(id){  //editlenecek objeyi ekrana yazdırıyor
        console.log('id to be edited', id);
        for(var i = 0; i < self.books.length; i++){
            if(self.books[i].id === id) {
                self.book = angular.copy(self.books[i]);
                break;
            }
        }
    }
 
    function remove(id){
        console.log('id to be deleted', id);
        if(self.book.id === id) {//clean form if the user to be deleted is shown there.
            reset();
        }
        deleteBook(id);
    }
 
 
    function reset(){
        self.book={id:null,name:'',writer:'',year:''};
        $scope.myForm.$setPristine(); //reset Form
    }
 
}]);
