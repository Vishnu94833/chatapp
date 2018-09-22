var chatApp = angular.module('chatApp', ['ui.router']);

chatApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/accountcreation');

    $stateProvider

    .state('accountcreation', {
            url: '/accountcreation',
            templateUrl: 'template/accountcreation.html'
        })
        .state('created', {
            url: '/created',
            templateUrl: 'template/created.html'
        }) 
        .state('login_page', {
            url: '/login_page',
            templateUrl: 'template/login_page.html'
        }) 
        .state('chat', {
            url: '/chat',
            templateUrl: 'template/chat.html'
        })    
});

