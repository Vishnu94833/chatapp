// var app = angular.module('loginController', []);
chatApp.controller('loginCtrl', function($scope, $http, $state) {

    // console.log('login');
    $scope.user={
        'email': '',
        'password': ''
    }
    console.log($scope.user);
    $scope.login = function(){
        console.log("login calling", $scope.user);
    $http({
        method: 'POST',
        url: '/login',
        data: $scope.user
    }).then(function(response){
        console.log(response.data.Success);
        
        if(response.data.Success==true){
            console.log(response.data.message);
            $scope.message="Login Successful";
        $state.go('chat');

        }
        else if(response.data.Success==false){
            console.log("username/password is invalid");
            $scope.message="Login Unsuccessful"
        }
    }, function(response) {
        //Second function handles error
        console.log(response);
        $scope.message = response.data.message;
    })
    }

});