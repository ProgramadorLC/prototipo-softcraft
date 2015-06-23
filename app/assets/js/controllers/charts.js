app.controller('ChartsController', ['$scope', '$interval', 'colorService', function($scope){

  $scope.canton = false;
  $scope.distrito = false;

  $scope.showCanton = function () {
    $scope.canton = !$scope.canton;
    console.log('hello');
  };

  $scope.showDistrito = function () {
    $scope.distrito = !$scope.distrito;
  };

}]);
