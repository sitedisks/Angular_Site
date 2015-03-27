
var siteApp = angular.module('siteApp', ['ui.bootstrap']);
siteApp.controller('testCtrl', function ($scope, $http) {
    $scope.message = 'Message from Angular';
    $scope.loadData = loadData;

    function loadData() {
        $http.get("dummyData.json").success(function (data) {
            $scope.products = data;
        });
    };

});

