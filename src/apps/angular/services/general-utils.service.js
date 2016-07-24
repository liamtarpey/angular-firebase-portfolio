app.service('GeneralUtils', GeneralUtils);

/* @ngInject */
function GeneralUtils($location) {

  var service = {
    updateUrlParams: updateUrlParams
  };

  return service;
  ///////////////

  function updateUrlParams(key, val) {
    $location.search(key, val);
  };

};
