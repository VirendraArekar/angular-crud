var myApp = angular.module("crud",["ngRoute"]);
myApp.config(function($routeProvider)
{
  $routeProvider
  .when('/',{
    templateUrl : 'templates/posts.html',
    controller : 'postsCtrl'
  })
  .when('/createPost',{
    templateUrl : 'templates/create.html',
    controller : 'createCtrl'
  })
  .when('/post/:id',{
    templateUrl : 'templates/view.html',
    controller : 'viewCtrl'
  })
  .when('/delete/:id',{
    templateUrl : 'templates/delete.html',
    controller : 'deleteCtrl'
  })
  .otherwise({
    redirectTo : '/'
  })
});

myApp.controller("postsCtrl", function($scope, $http)
{
  $http.get("http://localhost/Angular/webservices/allPosts.php")
  .then(function(response)
  {
    $scope.posts = response.data;
  });
});

myApp.controller("viewCtrl", function($scope, $http, $routeParams)
{
  $http({
    url : "http://localhost/Angular/webservices/getPost.php",
    params : {id:$routeParams.id},
    method : "get"
  })
  .then(function(response)
  {
    $scope.posts = response.data;
  });
});

myApp.controller("deleteCtrl", function($scope, $http, $routeParams)
{
  $http({
    url : "http://localhost/Angular/webservices/deletePost.php",
    params : {id:$routeParams.id},
    method : "get"
  })
  .then(function(response)
  {
    $scope.delete = response.data;
    console.log($sscope.delete);
  });
});

myApp.controller("createCtrl", function($scope)
{
  $('#submit').click(function()
  {
    var title = $("#title").val();
    var description = $("#description").val();
    var dataString = $("#myform").serialize();
    if(title == "" || description == "")
    {
      $("p:first").addClass("alert alert-danger");
      $("#msg").html("Fill all the detail");
    }
    else
    {
      $.ajax({
        type : "POST",
        url : 'http://localhost/Angular/webservices/addPost.php',
        data : dataString,
        cache : false,
        success : function(result)
        {
          $("p:first").removeClass("alert alert-danger");
          $("p:first").addClass("alert alert-success");
          $("#msg").html(result);
          var title = $("#title").val("");
          var description = $("#description").val("");
        }
      });
    }
    return false;
  });
});
