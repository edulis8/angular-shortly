angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Shorten) {

  angular.extend($scope, Shorten);

  $scope.link = {};

  $scope.addLink = function(link){
    console.log('link', link)
    Shorten.postLink(link)
    .then(function(data){
      console.log('addLink data returned', data);
    });
  };  

});


// link property on the scope - in the factory
// addLink method on the scope - in the factory 
// should be able to create links with addLink