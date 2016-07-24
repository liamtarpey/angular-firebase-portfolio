app.controller('homeController', homeController);

/* @ngInject */
function homeController(
  $location, $scope, $anchorScroll,
  HomeUtils, GeneralUtils
) {

  /**
   * Variables
   */
  var Ctrl = this;
  var projectParam = $location.$$search.project;
  Ctrl.options = HomeUtils.options;

  var config = {
      apiKey: "apiKey",
      authDomain: "projectId.firebaseapp.com",
      databaseURL: "https://databaseName.firebaseio.com",
      storageBucket: "bucket.appspot.com",
    };
  console.log(firebase);
  firebase.initializeApp(config);
  console.log(firebase);


  /**
   * Check if a project parameter is present in URL path
   */
  if(projectParam !== undefined && projectParam === 'thortful') switchCaseStudyVisibility(true);


  /**
   * General Functions
   */
  function scrollToTop() { $anchorScroll(0); };
  function updateUrlParams(key, val) { GeneralUtils.updateUrlParams(key, val); };
  function switchCaseStudyVisibility(visibility) { Ctrl.options.showCaseStudy = visibility; };


  /**
   * Scoped functions
   */
  Ctrl.showCaseStudy = function() {
    switchCaseStudyVisibility(true);
    updateUrlParams('project', 'thortful');
    scrollToTop();
  };

  Ctrl.hideCaseStudy = function() {
    switchCaseStudyVisibility(false);
    updateUrlParams('project', null);
    scrollToTop();
  };


  /**
   * Event Listeners
   */
  $scope.$on('showCaseStudy', function() { Ctrl.showCaseStudy(); });
  $scope.$on('hideCaseStudy', function() { Ctrl.hideCaseStudy(); });

};
