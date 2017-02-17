angular.module('myApp', ['ngAnimate'])
    .controller('ctrlinfo', function($scope, $http) {
        var url = 'http://aspirantes.hablacreativo.com/api/v1/admission_test';

        $http.get(url)
        .then(function(res){
            $scope.information = res.data.data["table-data"].values
            $scope.images = res.data.data.carousel.images
            console.log(res.data.data.carousel.images);
        })
    })
