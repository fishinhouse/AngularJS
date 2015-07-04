'use strict'

var angularApp=angular.module('angularApp',[]);

angularApp.controller('LowPriceCarTypeCtrl', function($scope){
$scope.items=[{
		'type':'Toyota Rav4',
		'city':'美国 - 洛杉矶',
		'price':'166元/天'
	},{
		'type':'Mitsubishi Asx',
		'city':'澳大利亚 - 霍巴特',
		'price':'153元/天'
	},{
		'type':'Nissan Qashqai',
		'city':'法国 - 巴黎',
		'price':'171元/天'
	},{
		'type':'VOLKSWAGEN UP',
		'city':'意大利 - 罗马',
		'price':'177元/天'
	}];
});


