angular.module('db', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate']);

angular.module('db').config(function($stateProvider) {

  /* Add New States Above */

});



angular.module('db').run(function(dbTail, dbPhotoTail) {
  dbTail.init();
  dbPhotoTail.init();
});