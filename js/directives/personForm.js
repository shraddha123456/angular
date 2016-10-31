angular.module("appName").directive("personForm",function(){
          return{ 
    
    restrict:"EAMC",
    templateUrl:"/views/personForm.html",
   controller:'appCtrl'
    };
                   
      });