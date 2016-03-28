app.directive('globalHeader', function() {
  return {
    templateUrl: '/dist/views/header/header.html',
    controller: _globalHeader,
    controllerAs: 'Header',
    bindToController: true
  }
});

/* @ngInject */
function _globalHeader() {
  var Header = this;
};
