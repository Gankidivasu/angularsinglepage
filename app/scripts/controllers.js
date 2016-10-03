'use strict';

angular.module('vasuapp')
    .controller('MenuController',['$scope','menuFactory',function($scope,menuFactory) {
        $scope.tab = 1;
        $scope.showDetails = false;
        $scope.dishes = menuFactory.getDishes();

        $scope.isSelected = function (checkTab) {
            return (this.tab === checkTab);
        }
        $scope.toggleDetails = function () {
            $scope.showDetails = !$scope.showDetails;
        }
        $scope.filtText = '';
        $scope.select = function (setTab) {
            $scope.tab = setTab;

            if (setTab === 2)
                $scope.filtText = "appetizer";
            else if (setTab === 3)
                $scope.filtText = "mains";
            else if (setTab === 4)
                $scope.filtText = "dessert";
            else
                $scope.filtText = "";
        }
    }])

    .controller('dishDetailController', ['$scope', '$routeParams', 'menuFactory', function($scope,$routeParams,menuFactory){
        var dish = menuFactory.getDish(parseInt($routeParams.id,10))
        $scope.dish = dish;
    }])


    .controller('ContactController', ['$scope', function($scope) {
        $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
        var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
        $scope.channels = channels;
        $scope.invalidChannelSelection = false;
    }])

    .controller('FeedbackController', ['$scope', function($scope) {
        $scope.sendFeedback = function() {
            console.log($scope.feedback);
            if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel)
            {
                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            }
            else {
                $scope.invalidChannelSelection = false;
                $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                    agree:false, email:"" };
                $scope.feedback.mychannel="";

                $scope.feedbackForm.$setPristine();
                console.log($scope.feedback);
            }
        };
    }])
    
    .controller('IndexController',['$scope','$routeParams','menuFactory','corporateFactory', function ($scope,$routeParams,menuFactory,corporateFactory) {
        $scope.promotions = menuFactory.getPromotion(0);
        $scope.indexleader = corporateFactory.getLeaders(1);
        $scope.getDishs = menuFactory.getDish(3);
}])
    .controller ('AboutController',['$scope','corporateFactory', function($scope,corporateFactory){
    //   $scope.leaderships = menuFactory.getLeaders();
       var leadership = corporateFactory.getLeader();
        $scope.leaders = leadership;
    }])

