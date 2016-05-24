juke.directive('doubleClick', function ($parse) {
    return {
    restrict: 'A',
    // scope: {
    //   doubleClick: '&'
    // },
    link: function (scope, element, attr) {
      console.log('scope outside', scope)
      element.on('dblclick', function (song) {
        console.log(attr.doubleClick);
        var fn = $parse(attr.doubleClick);
        console.log('scope inside', scope)
        console.dir(fn)
        console.log(scope.song);
        fn(scope);
      });
    }
  };
});