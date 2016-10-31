angular.module("appName").directive("sampleHeader",function(){
          return{ 
    restrict:"EAMC",
    template:"<h1>{{header}} </h1>",

    link:function($scope){
    $scope.header="Good morning "

        }
    };
                   
});