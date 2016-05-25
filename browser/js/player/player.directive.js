juke.directive('doubleClick', function ($parse) {
    return {
    restrict: 'A',
    scope: {
      doubleClick: '&'
    },
    link: function (scope, element, attr) {
      element.on('dblclick', function (song) {
        scope.doubleClick(scope);
      });
    }
  };
});