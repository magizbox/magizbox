/**
 * Created by rain on 7/1/2016.
 */
var myApp = angular.module('myApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
myApp.controller('MyController', function MyController($scope) {
  $scope.tools = [
    {
      "name": "Agile",
      "image": "./img/homepage/agile.png",
      "url": "/training/agile/site",
      "tag": "tool"
    },
    {
      "name": "Git",
      "image": "./img/homepage/git.png",
      "url": "/training/git/site",
      "tag": "tool"
    },
    {
      "name": "Docker",
      "image": "./img/homepage/docker.png",
      "url": "/training/docker/site",
      "tag": "tool"
    },
    {
      "name": "Lean",
      "image": "./img/homepage/lean.jpg",
      "url": "/training/lean/site",
      "tag": "tool"
    }
  ];
  
  $scope.works = [
    {
      "name": "Code 101",
      "image": "./img/homepage/code101.jpg",
      "url": "/training/code/site",
      "tag": "code"
    },
    {
      "name": "Python",
      "image": "./img/homepage/python.png",
      "url": "/training/python/site",
      "tag": "code"
    },
    {
      "name": "C++",
      "image": "./img/homepage/cpp.png",
      "url": "/training/cpp/site",
      "tag": "code"
    },
    {
      "name": "Java",
      "image": "./img/homepage/java.jpg",
      "url": "/training/java/site",
      "tag": "code"
    },
    {
      "name": "Javascript",
      "image": "./img/homepage/js.png",
      "url": "/training/javascript/site",
      "tag": "code"
    },
    {
      "name": "R",
      "image": "./img/homepage/r.png",
      "url": "/training/r/site",
      "tag": "code"
    },
    {
      "name": "Scala",
      "image": "./img/homepage/scala.png",
      "url": "/training/scala/site",
      "tag": "code"
    },
    {
      "name": "NodeJS",
      "image": "./img/homepage/nodejs.png",
      "url": "/training/nodejs/site",
      "tag": "code"
    },
    {
      "name": "Octave",
      "image": "./img/homepage/octave.jpg",
      "url": "/training/octave/site",
      "tag": "code"
    },
    {
      "name": "Computer Science",
      "image": "./img/homepage/cs.jpg",
      "url": "/training/computer_science/site",
      "tag": "cs"
    },
    {
      "name": "p5js",
      "image": "./img/homepage/p5.jpg",
      "url": "/lab/p5/p5-game-1.0/index.html",
      "tag": "lab"
    }
  ];

  $scope.startDate = moment([2015, 3, 27]);
  $scope.now = moment();
  $scope.journey = $scope.now.diff($scope.startDate, "day");

  $scope.countTraining = _.where($scope.works, {"tag": "code"}).length;
  $scope.countLab = _.where($scope.works, {"tag": "lab"}).length;
});