// var app = angular.module('myApp',[]);
// app.controller('myCtrl',function($scope){
//     $scope.firstname = 'huimin';
//     $scope.lastname = 'shao';
//     $scope.fullname = function(){
//         return $scope.firstname +" "+$scope.lastname;
//     }
// })


// angular.module('myApp',[])
// .controller('myCtrl',function($scope){
//     $scope.names =[
//         {name:'1',country:'11'},
//         {name:'2',country:'22'},
//         {name:'3',country:'33'}
//     ]
// })

// angular.module('myApp',[])
// .controller('myCtrl',function($scope){
//     $scope.myName = 'ShaoHuimin';
//     $scope.money = 100;
//     $scope.city = [
//         {'id':'1','name':'fujian'},
//         {'id':'2','name':'guangdong'},
//         {'id':'3','name':'shanghai'},
//         {'id':'4','name':'beijing'},
//         {'id':'5','name':'sichuan'}
//     ]
// }).filter('aa',function(){   //自定义过滤器
//     return function(val){
//         return val.split('u').reverse().join('');
//     }
// })


// angular.module('myApp',[])
// .controller('myCtrl',function($scope){

// })
// .filter('myfilter',function(){
//     return function(text){
//         var newArguments = Array.prototype.slice.call(arguments);
//         return text+newArguments.join('，');
//     }
// })


// var app = angular.module('myApp', []);
// app.controller('myCtrl', function($scope, $location) {
//     $scope.myUrl = $location.absUrl();
// });


// angular.module('myApp',[])
// .controller('myCtrl',function($scope,$http){
//     $http.get('').then(function(response){
//         $scope.myWelcom = response.data;
//     })
// })


// angular.module('myApp',[])
// .controller('myCtrl',function($scope,$http){
//     $http({
//         mothod:'get',
//         url:'http://www.runoob.com/try/try.php?filename=try_ng_customers_json3'
//     }).then(function success(response){
//         $scope.names = response.data.sites;
//     },function error(response){
//         console.log(response);
//     }
// )
// })


// angular.module('myApp',[])
// .controller('myCtrl',function($scope){
//     $scope.names = ['google','runoob','taobao'];
// })



// angular.module('myApp',[])
// .controller('myCtrl',function($scope){
//     $scope.sites = [
//     {site:'google',url:'http1'},
//     {site:'runoob',url:'http2'},
//     {site:'taobao',url:'http3'}
//     ];
// })

