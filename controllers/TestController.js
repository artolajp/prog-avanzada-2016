var app = angular.module("TestApp",[])
app.controller ("TestController",["$scope",function($scope){
	$scope.name = "Juan";
	$scope.age =25;
	$scope.email="juanpabloartola@gmail.com";
	$scope.newDetail = {};
	$scope.details = [
		{
			detail : "Universitario"
		},
		{
			detail : "Programador"
		}
	];
	
	$scope.addDetail = function (){
		$scope.details.push($scope.newDetail);
		$scope.newDetail={};
	}
}]);
app.controller("TestHttpController",function($scope,$http){
		$scope.newPost={};
		$http.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			console.log(data);
			$scope.posts = data;
		})
		.error(function(err){
			console.log(err);
		});
		$scope.addPost = function(){
		$http.post("http://jsonplaceholder.typicode.com/posts",{
			title:$scope.newPost.title,
			body:$scope.newPost.body,
			userId:1
		}).success(function(data,status,headers,config){
			$scope.posts.push(data);
			console.log(data+" //"+status);
			$scope.newPost={};
			
		}).error(function(error,status,headers,config){
			
		});
		}
		
		
	});