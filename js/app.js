/**
 * Created by rain on 7/1/2016.
 */
var myApp = angular.module('myApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
myApp.controller('MyController', function MyController($scope) {
  $scope.tools = [
    {
      "name": "Agile",
      "image": "./img/homepage/agile.jpg",
      "url": "/training/agile",
      "tag": "tool"
    },
    {
      "name": "Git",
      "image": "./img/homepage/git.png",
      "url": "/training/git",
      "tag": "tool"
    },
    {
      "name": "Docker",
      "image": "./img/homepage/docker.png",
      "url": "/training/docker",
      "tag": "tool"
    },
    {
      "name": "Lean",
      "image": "./img/homepage/lean.jpg",
      "url": "/training/lean",
      "tag": "tool"
    }
  ];
  
  $scope.works = [
    {
      "name": "Code 101",
      "image": "./img/homepage/code101.jpg",
      "url": "/training/code",
      "tag": "code"
    },
    {
      "name": "Python",
      "image": "./img/homepage/python.png",
      "url": "/training/python",
      "tag": "code"
    },
    {
      "name": "C++",
      "image": "./img/homepage/cpp.png",
      "url": "/training/cpp",
      "tag": "code"
    },
    {
      "name": "Java",
      "image": "./img/homepage/java.jpg",
      "url": "/training/java",
      "tag": "code"
    },
    {
      "name": "Javascript",
      "image": "./img/homepage/js.png",
      "url": "/training/javascript",
      "tag": "code"
    },
    {
      "name": "R",
      "image": "./img/homepage/r.png",
      "url": "/training/r",
      "tag": "code"
    },
    {
      "name": "Scala",
      "image": "./img/homepage/scala.png",
      "url": "/training/scala",
      "tag": "code"
    },
    {
      "name": "NodeJS",
      "image": "./img/homepage/nodejs.png",
      "url": "/training/nodejs",
      "tag": "code"
    },
    {
      "name": "Octave",
      "image": "./img/homepage/octave.jpg",
      "url": "/training/octave",
      "tag": "code"
    },
    {
      "name": "Computer Science",
      "image": "./img/homepage/cs.jpg",
      "url": "/training/computer_science",
      "tag": "cs"
    },
    {
      "name": "p5js",
      "image": "https://res.cloudinary.com/hashnode/image/upload/w_400/w_400,h_300,c_thumb/v1462445070/ftvmb9z1rkvdliydvj84.jpg",
      "image": "./img/homepage/p5.jpg",
      "tag": "lab"
    }
  ];

  $scope.startDate = moment([2015, 3, 27]);
  $scope.now = moment();
  $scope.journey = $scope.now.diff($scope.startDate, "day");

  $scope.countTraining = _.where($scope.works, {"tag": "code"}).length;
  $scope.countLab = _.where($scope.works, {"tag": "lab"}).length;
});