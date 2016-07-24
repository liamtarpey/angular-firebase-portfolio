app.directive('caseStudy', function() {
  return {
    scope: {},
    templateUrl: '/dist/views/case-study/case-study.html',
    controller: caseStudy,
    controllerAs: 'Ctrl',
    bindToController: true
  }
});

/* @ngInject */
function caseStudy(
  $scope
) {

  var Ctrl = this;

  Ctrl.hideCaseStudy = function() {
    $scope.$emit('hideCaseStudy');
  };

};
