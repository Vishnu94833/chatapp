var chatApp = angular.module('chatApp',['ui.router']);

chatApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/register');

    $stateProvider

    .state('register', {
            url: '/register',
            templateUrl: 'template/registration.html',
            controller:'registerCtrl'
        })
       
        .state('login', {
            url: '/login',
            templateUrl: 'template/login.html',
            controller:'loginCtrl'
        }) 
        // .state('chat', {
        //     url: '/chat',
        //     templateUrl: 'template/chat.html'
        // })    
});

