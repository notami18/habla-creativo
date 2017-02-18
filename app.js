(function() {
  'use strict';

	angular.module('myApp',['ngAnimate'])
	    .controller('ctrlinfo', function($scope, $http) {

		   	var url = 'http://aspirantes.hablacreativo.com/api/v1/admission_test';
	        $http.get(url)
	        .then(function(res){
	            $scope.information = res.data.data["table-data"].values
	            $scope.images = res.data.data.carousel.images
	            console.log(res.data.data.carousel.images);
	        });
	    })

	    $scope.agregarinfo = function() {
            $scope.listaInfo.push({
                zone: $scope.it_zone,
                y1993: $scope.it_y1993,
                y2005: $scope.it_y2005,
                y2010: $scope.it_y2010,
                y2015: $scope.it_y2015,
                created_at: $scope.it_created_at,
                updated_at: $scope.it_updated_at
            });

            $scope.it_zone = '';
            $scope.it_y1993 = '';
            $scope.it_y2005 = '';
            $scope.it_y2010 = '';
            $scope.it_y2015 = '';
            $scope.it_created_at = '';
            $scope.it_updated_at = '';
        }
})();