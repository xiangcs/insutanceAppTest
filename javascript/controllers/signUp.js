/**
 * Created by xcs on 16/2/16.
 */

angular.module('app').controller("signUpCtrl",function($scope){
    $scope.isTrue = false;
    $scope.warning= "";
    localStorage.setItem("myName", "Jack");
    localStorage.setItem("myPassword", "1234");
    var myName = localStorage.getItem("myName");
    var myPassword = localStorage.getItem("myPassword");

    $scope.login = function(user,pw){
        if(user==myName && pw == myPassword) {
            $scope.isTrue = true;
        }
        else {
           $scope.warning="Not Correct userName or password";
        }
    };
});
