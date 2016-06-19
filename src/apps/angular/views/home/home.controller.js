app.controller('homeController', homeController);

/* @ngInject */
function homeController(
  $location, $scope, $anchorScroll,
  HomeUtils
) {
  var Ctrl = this;
  Ctrl.options = HomeUtils.options;

  Ctrl.showCaseStudy = function() {
    Ctrl.options.showCaseStudy = true;
    $anchorScroll(0);
  };

  $scope.$on('hideCaseStudy', function() {
    Ctrl.options.showCaseStudy = false;
    $anchorScroll(0);
  });
};
