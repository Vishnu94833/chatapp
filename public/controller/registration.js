// var app = angular.module('registerController', []);
chatApp.controller('registerCtrl', function($scope, $http) {
    // console.log('register');
    $scope.user={
        'firstName': '',
        'lastName': '',
        'mobilenumber': '',
        'email': '',
        'password': ''
    }
    // console.log($scope.user);
    $scope.register = function(){
        // console.log("register calling", $scope.user);
    $http({
        method: 'POST',
        url: '/register',
        data: $scope.user
    }).then(function(response){
         console.log(response);
        // console.log(response.data.Success);
        
        if(response.data.Success==true){
            console.log("successful");
            $scope.message="Registration Successful";
        }
        else if(response.data.Success==false){
            console.log(response.data.Success)
            $scope.message=response.data.message;
        }
    }, function(err) {
        //Second function handles error
        console.log(err);
        $scope.message = "Something went wrong";
    })
    }
    
});