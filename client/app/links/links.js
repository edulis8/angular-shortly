angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here

  angular.extend($scope, Links);
  $scope.data = {};

  $scope.getLinks = function(){
    Links.getLinkData()
      .then(function(data){
        return ($scope.data.links = data);
      })
      .catch(function(err){
        console.log(err);
      });
  };

  $scope.getLinks();

});


// data property on the scope - in the factory
// getLinks method on the scope - in the factory 
// call getLinks when the controller is loaded