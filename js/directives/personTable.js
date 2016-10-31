angular.module("appName").directive("personTable",function(){
          return{ 
    
    restrict:"EAMC",
    templateUrl:"/views/personTable.html",
   controller:'appCtrl'
    };
                   
      });