app.config(

/* @ngInject */
function(
  $routeProvider, $locationProvider
) {

  // Routing
 	$routeProvider
    .when('/', {
      templateUrl: '/dist/views/home/home.html',
      controller: 'homeController',
      controllerAs: 'Ctrl',
      reloadOnSearch: false
    })
    .otherwise({
      redirectTo: '/404'
    });

  $locationProvider.html5Mode({
  	enabled: true,
  	requireBase: false
  });
});
