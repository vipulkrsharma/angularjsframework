function modulesCtrl($scope, $http) {
    $http.get("https://api.github.com/legacy/repos/search/angularjs").success(function (data) {
        $scope.modulesData = data.repositories;
    });
};