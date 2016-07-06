/**
 * Created by rain on 7/1/2016.
 */
var myApp = angular.module('myApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
myApp.controller('MyController', function MyController($scope) {
  $scope.works = [
    {
      "name": "Code 101",
      "image": "https://d13yacurqjgara.cloudfront.net/users/365027/screenshots/1412849/go-code-colorado-logo_1x.jpg",
      "url": "/training/code",
      "tag": "code"
    },
    {
      "name": "Python",
      "image": "http://media.bestofmicro.com/W/L/332949/original/pythonLogo.png",
      "url": "/training/python",
      "tag": "code"
    },
    {
      "name": "CPP",
      "image": "https://d13yacurqjgara.cloudfront.net/users/46200/screenshots/799814/cpp-logo-dribbble_1x.png",
      "url": "/training/cpp",
      "tag": "code"
    },
    {
      "name": "Java",
      "image": "http://freebiesarena.heck.in/files/java-icon.jpg",
      "url": "/training/java",
      "tag": "code"
    },
    {
      "name": "Javascript",
      "image": "https://qph.is.quoracdn.net/main-qimg-c673bc3d007e79ef4d9f1ca689b0de43?convert_to_webp=true",
      "url": "/training/javascript",
      "tag": "code"
    },
    {
      "name": "R",
      "image": "http://ccs.miami.edu/wp-content/uploads/ucompute/logo/logo-26.png",
      "url": "/training/r",
      "tag": "code"
    },
    {
      "name": "Scala",
      "image": "http://nextlab.herokuapp.com/assets/images/zf/portfolio/Scala.png",
      "url": "/training/scala",
      "tag": "code"
    },
    {
      "name": "NodeJS",
      "image": "http://i0.wp.com/dev-ops.net/wp-content/uploads/2013/09/nodejs-1024x7685.png?w=400",
      "url": "/training/nodejs",
      "tag": "code"
    },
    {
      "name": "Octave",
      "image": "https://lh3.googleusercontent.com/-gP82wD-cfDo/UUSw8Z91ArI/AAAAAAAAA70/hPTgdWPsP44/s400/sfera.jpg",
      "url": "/training/octave",
      "tag": "code"
    },
    {
      "name": "Platform",
      "image": "http://brevardapps.com/blog/wp-content/uploads/2015/08/melbourne-fl-mobile-app-development-companies.jpg",
      "url": "/training/platform",
      "tag": "code"
    },
    {
      "name": "Big Data",
      "image": "http://economictimes.indiatimes.com/photo/50433108.cms",
      "url": "/training/bigdata",
      "tag": "data"
    },
    {
      "name": "Data Science",
      "image": "http://www.brightfonts.com/uploads/brightfonts/data_science_400x300.png",
      "url": "/training/datascience",
      "tag": "data"
    },
    {
      "name": "Deep Learning",
      "image": "https://575717b777ff8d928c6b-704c46a8034042e4fc898baf7b3e75d9.ssl.cf1.rackcdn.com/3410318_556dc8f_m.jpeg",
      "url": "/training/deep_learning",
      "tag": "data"
    },
    {
      "name": "p5js",
      "image": "https://res.cloudinary.com/hashnode/image/upload/w_400/w_400,h_300,c_thumb/v1462445070/ftvmb9z1rkvdliydvj84.jpg",
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