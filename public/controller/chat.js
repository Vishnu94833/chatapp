// chatApp.controller('homeCtrl', function ($scope, $http, $location) {
//     var mytoken = localStorage.getItem("token");
//     var id = localStorage.getItem("userid");
//     console.log("id is" + id)
//     var arr = [];
//     $http({
//         method: 'GET',
//         url: 'auth/users/' + id + '/list',
//         headers: {
//             'token': mytoken
//         }
//     }).then(function (response) {
//         console.log(response.data.message)
//         for (var i = 0; i < (response.data.message).length; i++) {
//             arr.push(response.data.message[i].firstname)
//         }
//         console.log(arr);
//     })
//     $scope.arr = arr;
//     $scope.logout = function () {
//         localStorage.removeItem(token);
//         localStorage.removeItem(userid);
//         $location.path('/login')

//     }
//     var socket = io.connect('http://localhost:4000');

// })




chatApp.controller('homeCtrl', function ($scope, $http, $location, SocketService) {
    var mytoken = localStorage.getItem("token");
    var id=localStorage.getItem("userid");
    var username=localStorage.getItem("username");
    $scope.currUser=username;
    $scope.val=0;

    console.log("id is"+id)
       var arr=[];
       var msgArr=[];
    $http({
        method: 'GET',
        url: 'auth/users/'+id+'/list',
        headers:{
            'token': mytoken
        }
    }).then(function (response) {
        // console.log(response.data.message)
        for(var i=0;i<(response.data.message).length;i++){
            arr.push(response.data.message[i].firstname)
        }
        // console.log(arr);
    })
        $scope.arr = arr;
    
    
        $scope.sendMessage = function () {
            SocketService.emit('tobackend', { "userid": id, "message": $scope.message, "date": new Date(),"username":username })
            $scope.message= null;
    
        }
    
    
        $http({
            method: 'GET',
            url: '/auth/users/'+id+'/msgs',
            headers: {
                'token': mytoken
            }
        }).then(function (response) {
            for(var i=0;i<(response.data.message).length;i++)
            msgArr.push(response.data.message[i]);
            // nameArr.push(response.data.message[i].firstname);

            // nameArr.push(response.data.message[i].username);
        })
        $scope.msgArr=msgArr;
       
    SocketService.on('tofrontend',function(msg){
            $scope.msgArr.push(msg)
        })
        $scope.logout=function () {
            localStorage.removeItem("token");
            localStorage.removeItem(id);
            $location.path('/login')
    
        }

        $scope.singleconv=function(username)
        {
            console.log(username);
            $scope.val=1;
        }

    
    })