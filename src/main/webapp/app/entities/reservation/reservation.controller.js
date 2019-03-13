'use strict';
 
angular.module('jhipsterApp')
.controller('ReservationController', ['$scope', 'ReservationService', function($scope, ReservationService) {
    var self = this;
    self.reservation={id:null,userid:'',bookid:'',startDate:'',finalDate:''};
    self.reservations=[];
    self.numbers=[];
    self.numbersBook=[];
    self.checkError=function(startDate,finalDate){
    	
    	self.errMessage = '';
        self.curDate = new Date();
        
        if(new Date(startDate) > new Date(finalDate)){
        	self.errMessage = 'End Date should be greater than start date';
           
          
          }
          if(new Date(startDate) < curDate){
             self.errMessage = 'Start date should not be before today.';
             return false;
          }
      };
      
      self.checkError2=function(controlBookid,controlDate){
    	  
    	  self.errMessage2='';
    	  for(var i = 0; i < self.reservations.length; i++)
        {
    		  if (self.reservations[i].bookid==controlBookid && self.reservations[i].finalDate>controlDate) {
    		  self.errMessage2="This book is used by another user between these dates"
    	      self.reservation.bookid='';
    		  }
        }
    		 
    			
    			 
       
       		   	   	            		  
      };
    

 
    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;
 
    
    fetchAllReservations();

 
    function fetchAllReservations(){
       ReservationService.fetchAllReservations()
            .then(
            function(d) {
                self.reservations = d;
            },
            function(errResponse){
                console.error('Error while fetching Reservations');
            }
        );
    }
    
    
    
    fetchAllNumbers(); //user tablosundan data çeker

    
    function fetchAllNumbers(){
       ReservationService.fetchAllNumbers()
            .then(
            function(d) {
                self.numbers = d;
            },
            function(errResponse){
                console.error('Error while fetching Reservations');
            }
        );
    }
    
    
fetchAllNumbersBook(); //book tablosundan data çeker

    
    function fetchAllNumbersBook(){
       ReservationService.fetchAllNumbersBook()
            .then(
            function(d) {
                self.numbersBook = d;
            },
            function(errResponse){
                console.error('Error while fetching Reservations');
            }
        );
    }
    
    
   
    
    
 
    function createReservation(reservation){
    	ReservationService.createReservation(reservation)
            .then(
            fetchAllReservations,
            function(errResponse){
                console.error('Error while creating Reservation');
            }
        );
    }
 
    function updateReservation(reservation, id){
    	ReservationService.updateReservation(reservation, id)
            .then(
            fetchAllReservations,
            function(errResponse){
                console.error('Error while updating Reservation');
            }
        );
    }
 
    function deleteReservation(id){
    	ReservationService.deleteReservation(id)
            .then(
            fetchAllReservations,
            function(errResponse){
                console.error('Error while deleting Reservation');
            }
        );
    }
 
    function submit() {
        if(self.reservation.id===null){
            console.log('Saving New Reservation', self.reservation);
            createReservation(self.reservation);
        }else{
            updateReservation(self.reservation, self.reservation.reservationId);
            console.log('Reservation updated with id ', self.reservation.reservationId);
        }
        reset();
    }
 
    function edit(id){
        console.log('id to be edited', id);
        for(var i = 0; i < self.reservations.length; i++){
            if(self.reservations[i].reservationId === id) {
                self.reservation = angular.copy(self.reservations[i]);
                break;
            }
        }
    }
 
    function remove(id){
        console.log('id to be deleted', id);
        if(self.reservation.id === id) {//clean form if the user to be deleted is shown there.
            reset();
        }
        deleteReservation(id);
    }
 
 
    function reset(){
        self.reservation={id:null,userId:'',bookId:'',startDate:'',finalDate:''};
        $scope.myForm.$setPristine(); //reset Form
    }
 
}]);
