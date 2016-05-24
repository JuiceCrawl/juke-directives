juke.directive('albumList', function () {
  return {
    restrict: 'E', // the 'E' is for 'element'
    scope: {
      albums: '='
    },
    template: `<div>
        <h4>ALBUMS</h4>
        <div class="row">
          <div ng-repeat="album in albums" class="col-xs-4">
            <a class="thumbnail" ui-sref="album({albumId: album.id})">
              <img ng-src="{{ album.imageUrl }}">
              <div class="caption">
                <h5>
                  <span>{{ album.name }}</span>
                </h5>
                <small>{{ album.songs.length }} songs</small>
              </div>
            </a>
          </div>
        </div>
      </div>`
  }
});

// <div width="200"//@ string literal 

// <ng repeat="obj.height:200"
// <div width="obj.height"//= var 

// ????
//&

