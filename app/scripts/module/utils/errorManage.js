angular.module('app').config(function($provide){
    
  $provide.decorator('$exceptionHandler', ['$delegate', function($delegate){
    
    return function(exception, cause) {
      exception.message = 'CONTACT ADMIN! \n Message: ' + exception.message;
      
      //Delegimi i errorit dhe ne Error Console
      $delegate(exception, cause);
      
      console.log("MyException"+exception.message);
    };
  }]);
  
});