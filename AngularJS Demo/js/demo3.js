//定义组件myApp
var app=angular.module('myApp', []);
//定义myApp组件的controller
app.controller('myCtrl', function($scope){
	$scope.verson="v3.0";
	$scope.persons=[{firstname:'wang',lastname:'liang'},{firstname:'liu',lastname:'fei'},{
	firstname:'wang',lastname:'yang'}];

});