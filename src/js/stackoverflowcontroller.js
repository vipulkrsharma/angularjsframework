function stackoverflowCtrl($scope, $http) {
    $http.jsonp("http://api.stackoverflow.com/1.1/search?intitle=angularjs&sort=votes&jsonp=JSON_CALLBACK&per_page=500").success(function (data) {
        $scope.stackoverflowData = data.questions;
    });
};