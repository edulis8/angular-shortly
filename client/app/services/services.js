angular.module('shortly.services', [])

.factory('Links', function ($http) {
  var getLinkData = function(){
    return $http({
      method: 'GET',
      url: '/api/links'
    })
    .then(function(resp){
      return resp.data;
    });
  };

  return {getLinkData: getLinkData};
  
})

.factory('Shorten', function($http){

  var postLink = function( link ){
    console.log('post link', link);
    //link = JSON.stringify(link);
    return $http({
      method: 'POST',
      url: '/api/links',
      data: link
    }).then(function(resp){
      console.log('Posted!', resp.data);
      return resp.data;
    });
  };

  return {postLink : postLink};

})


.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };
  // get this into auth.js $scope and call it when someone clicks logout
  var signout = function () {
    console.log('inside signout in factory', $window.localStorage.getItem('com.shortly'));
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
