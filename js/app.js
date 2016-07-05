/**
 * Created by rain on 7/1/2016.
 */
var myApp = angular.module('myApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
myApp.controller('MyController', function MyController($scope) {
  $scope.works = [
    {
      "name": "Code 101",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/training/code",
      "tag": "training"
    },
    {
      "name": "Python",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/training/python",
      "tag": "training"
    },
    {
      "name": "CPP",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/training/cpp",
      "tag": "training"
    },
    {
      "name": "Java",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/training/java",
      "tag": "training"
    },
    {
      "name": "Javascript",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/training/javascript",
      "tag": "training"
    },
    {
      "name": "Big Data",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/training/bigdata",
      "tag": "training"
    },
    {
      "name": "Data Science",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/training/datascience",
      "tag": "training"
    },
    {
      "name": "Deep Learning",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/training/deep_learning",
      "tag": "training"
    },
    {
      "name": "p5js",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/lab/p5",
      "tag": "lab"
    }
  ];

  $scope.startDate = moment([2015, 3, 27]);
  $scope.now = moment();
  $scope.journey = $scope.now.diff($scope.startDate, "day");

  $scope.countTraining = _.where($scope.works, {"tag": "training"}).length;
  $scope.countLab = _.where($scope.works, {"tag": "lab"}).length;
});