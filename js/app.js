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
      "tag": "code"
    },
    {
      "name": "Python",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/training/python",
      "tag": "code"
    },
    {
      "name": "CPP",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/training/cpp",
      "tag": "code"
    },
    {
      "name": "Java",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/training/java",
      "tag": "code"
    },
    {
      "name": "Javascript",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/training/javascript",
      "tag": "code"
    },
    {
      "name": "R",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/training/r",
      "tag": "code"
    },
    {
      "name": "Scala",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/training/scala",
      "tag": "code"
    },
    {
      "name": "NodeJS",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/training/nodejs",
      "tag": "code"
    },
    {
      "name": "Octave",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/training/octave",
      "tag": "code"
    },
    {
      "name": "Platform",
      "image": "https://d13yacurqjgara.cloudfront.net/users/210858/screenshots/2113044/code_logo_1x.jpg",
      "url": "/training/platform",
      "tag": "code"
    },
    {
      "name": "Big Data",
      "image": "https://maxdemarzidotcom.files.wordpress.com/2012/02/matrix.jpg?w=400",
      "url": "/training/bigdata",
      "tag": "data"
    },
    {
      "name": "Data Science",
      "image": "https://maxdemarzidotcom.files.wordpress.com/2012/02/matrix.jpg?w=400",
      "url": "/training/datascience",
      "tag": "data"
    },
    {
      "name": "Deep Learning",
      "image": "https://maxdemarzidotcom.files.wordpress.com/2012/02/matrix.jpg?w=400",
      "url": "/training/deep_learning",
      "tag": "data"
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

  $scope.countTraining = _.where($scope.works, {"tag": "code"}).length;
  $scope.countLab = _.where($scope.works, {"tag": "lab"}).length;
});