'use strict';
angular.module("appName").controller("appCtrl",["$scope",function($scope){
  
    $scope.header="hello world";
    $scope.test=function(){
        $scope.header="oh! look it change";
        $scope.tests="change both";
    }
    
    
}]);




                       
                       