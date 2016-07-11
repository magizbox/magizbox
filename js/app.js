/**
 * Created by rain on 7/1/2016.
 */
var myApp = angular.module('myApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
myApp.controller('MyController', function MyController($scope) {
  $scope.tools = [
    {
      "name": "Agile",
      "image": "https://lh3.googleusercontent.com/qTfENDsHkpLGv0hBGiDFRzBaYlJzvCqUpjMbvDBnHuPpMlobxRRAjbBIFiO4ucEtiFQ-xTIeYyF0Pz_8ZEOWlgtHfP4RPKr8up9TXeMTYGAQ7-wPFpjMRuTdrA7GTEdW5_nV941bxcrpeR0r4ioGqJS4Kv4HYHZAmg6EvUouuCaDD6pMpPjCSa2EF4K5H_H3RZEfdagej53gBaxQr_8r1BiJA_9w_6P2zxuFvzV9NtCfTAUaAvHuWH5jJUTJhOT1P7TjVpyXaSrQFI4GHPaONasouN_2mvM33FxhtktJOW9LNC_I2OF15b82buAsmBFYQOFtZNqzhAkNTbwEK_MPcx_TVCyjoU8Uj9sq3M1kmrSpCxew0Wq3Gw9Je-62YWgSjHJYD6Z9Ys8twCkVhUQkw_O_oyu896R6cM4sYGnWYd62O3ZsH2YdtRDlxWcE_UhSXiQ8Av-cj-1Mr5sVjnPtUh9fy3JZUy68ZuQ8IPPSyx5E5qImGqtLdWBDA2OkOlI18ZMwcI4_XSoLb0oA_ocZF3V2VA8hmbUWWaDYyqUSaspiaEpr24ww9b5Imwz0lUZRksGAPCAyiT7T1LbAVU9BKyqE5FpWHguw=w400-h300-no",
      "url": "/training/agile",
      "tag": "tool"
    },
    {
      "name": "Git",
      "image": "https://lh3.googleusercontent.com/lBTShcBoSIrAuuuT4_L9vrbXioBz5fpV1gpN2001cz35XVtcjZPGIo2njycXozdds2EgdgGePxSe1nXrhgeHq-KY_m0zKvdyo9MLM5UuDUrLXCvzFgJrDaP5KMzV4M9wlH3rxPIXDlJ5MjJSli7KSHuJObXovexeJhA1I05CYDiajetC_9-8Xc0hCIBbQJfP1SJy0hssi1wta9HCAATNgqXVderIREOwUN8OAYzkRkMig0KgS_5MgttzhtxgNJwqxRB8TYjovVDpDHSo6Y-US0JhKTyt-uFDHghTCVx8wuwihvIKdfPrNy2eEcCWTFsgrBs0xpDkvTtqKprXbgOACOOhjQh549jqX-wq0csqYkl4OFq0ndLKSOyNdvW9Ro-ppiR9h5fOETbw2wATchOuZj78pFb1qOqJatnO5Vh8fUAM9C-H9U9KCWzR58X0wT_fuiRGRXC7UZesa-y7fKIOlNuXsKKT9cmuE7i_rmbaGQjyOrnjDYWGbD38aRJbeCvvhKkoqbl0TaNNUJC1UWbM9g0Zcf__PmjnCIFdcxrQHFjZ5X7n4ulGFh6cNMkRkuBo5DNJC-7FIXXyMvlrlDn9gVQTo4slEF5t=w400-h300-no",
      "url": "/training/git",
      "tag": "tool"
    }
  ];
  
  $scope.works = [
    {
      "name": "Code 101",
      "image": "https://lh3.googleusercontent.com/OG3mQ5-oySBBahIETBLK9n2k3uCeZUxOg1sICPpWWSPiQStucDUbQrE86WZoPbBhUKA_S-m86gLZxtu7Z3vIjunQZRvc43p0E_LmlpHOh_b5FfNW8BIvWNdu4kSf4Lnj7GJXtIwguAwocSw5S3F-UcE7BDXfzjyqofkH4hI_HcsNY3R_Etuj75F8LXETHiwPCA28oxYFklbM-zrhLvbrvQmw1j-Qdy2LIfxWN7mGiLEb8PaxOOSI9XlR5IMb2aJlibo36UlDPhEiLW9QfQ6tDcEpbUIBtGKtVMsendrXO0re5xHvc86rF1ygrkSpNn2emphiXGnUYXtjJx73DmitxwJ7uEsXe2lpTPzezKtjdYtZlUirrW7VG2qFFvikQXss8PdpnU_BwQ2aT3F1cGQ4hi5K5Er3dsyXSzK3edAnPXjLWJj-bUkwJPZb2YAtscAaaTOHKQ9GRlTbTmGNKE5BSUwWnJcQXQfS1gYQvTbY1jZ2AhD3TbglQSEkm7OlDJfkFFklafg8zRoUjd280hDSsqLjJVbhl-lTako4rb_ixGaIKV7o6xflVT_3JWNayLmwuU1gauia9eO4DQ-_a_6lVVTC9z3Bc3tx=w400-h300-no",
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
      "image": "./img/homepage/platform.jpg",
      "url": "/training/platform",
      "tag": "code"
    },
    {
      "name": "Computer Science",
      "image": "https://lh3.googleusercontent.com/Uufy8m5rZNANW1-Sk0CnCeigcYRBUgUwiRlA_flWeVFWTO2er83UDof3wufje83X5okMPFOqzo_pRqHy1ADmQKFMO3waBmbzcjBKKV3_n120tvuDDYg6PgZ1TAGcDEZXPap0RpAA9S3ci8FWJyEe4T8Virxc_Un2xjtoHobptYrx_YUohRoYRH6kZAPvOJnXje6NJwnOM5dwcJi5bUzSEBIeF5THSflPC_gIWcyR3p42eoTHMK7UR9tvSgYM9m9Oy-16lAjvADv88zhXutAt035U_nmc6hEOYSzoco6GA8X4JKB4f0IIs9eD16C-uzZXplb-YIyrwAFYVOwJLazRSTzZLvSrPMJ7E_2WCP7jjvDbEbf0q-WABGDkXfRqYjB4z6UAybSEQT0D01G63d2-6fM7FOfdKLQF3tuh1PM8KOhFFZdhEuqYn0zpHPZ870cTZEebfPsbxX8jjJEYZZW5TTXQ1Fx4CvUNyFtsHDnJCgS934PMWlurmEcn6hGFajD7lHxnp94TfykZMVBeJUMVrAa8XgzAuJNnFkJno7CM0YoxypRounCIKY3yGG1QoWE-_Zx-7EfnK2ysY2I6DrVTA7WSeKaQ9y3K=w400-h300-no",
      "url": "/training/computer_science",
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
      "image": "./img/homepage/data_science.png",
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