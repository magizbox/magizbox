/**
 * Created by rain on 7/1/2016.
 */
var myApp = angular.module('myApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
myApp.controller('MyController', function MyController($scope) {
  $scope.works = [
    {
      "name": "Python",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/training/python",
      "tag": "training"
    },
    {
      "name": "Javascript",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/training/javascript",
      "tag": "training"
    },
    {
      "name": "p5js",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/lab/p5",
      "tag": "lab"
    }
  ]

  $scope.startDate = moment([2015, 3, 27]);
  $scope.now = moment();
  $scope.journey = $scope.now.diff($scope.startDate, "day");

  $scope.countTraining = _.where($scope.works, {"tag": "training"}).length;
  $scope.countLab = _.where($scope.works, {"tag": "lab"}).length;
});