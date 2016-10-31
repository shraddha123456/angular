angular.module("appName").directive("sampleHeader",function()
          return{ 
    //e-element
    //a-attributes
    //m-comments
    //c=class
    
    restrict:"EAMC"
    templateUrl:"/vies/"
   controller:'appctrl',
   // controller:function($scope){
   // $scope.header="HEAD FROM DIRECTIVE";
   // $scope.xyz=15;
//}
    link:function($scope){
    $scope.header="modified from directive "
  // alert($scope)
}
    };
                   
      });