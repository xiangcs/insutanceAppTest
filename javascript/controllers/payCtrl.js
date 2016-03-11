/**
 * Created by xcs on 16/2/14.
 */
angular.module('app').controller("payCtrl",function($scope){
    $scope.months = ["Month","Jan/01","Feb-02","Mar-03","Apr-04","May-05",
        "Jun-06","Jul-07","Aug-08","Sep-09","Oct-10","Nov-11","Dec-12"];
    $scope.years = ["Year","2016","2017","2018","2019","2020",
        "2021","2022","2023"];
    $scope.countries = {
        'China':{
            'Shandong':['Rizhao','Qingdao','Jinan'],
            'HeNan':['Zhengzhou','Luoyang']
        },
        'USA':{
            'California':['San Jose','San Francisco'],
            'Ohio':['Dayton','Cincinnata']
        }
    };
});
