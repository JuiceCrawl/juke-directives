juke.directive('songList', function (PlayerFactory) {
  return {
      restrict:'E',
      scope: {
        songs: "="
      },
      template: 
      `<table class='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Artists</th>
          <th>Genres</th>
        </tr>
      </thead>
      <tbody>
        <tr double-click="toggle(song)" ng-repeat="song in songs" ng-class="{active: song === getCurrentSong() }">
          <td>{{ song.name }}</td>
          <td><span ng-repeat="artist in song.artists">{{ artist.name }}{{ $last ? '' : ', ' }}</span></td>
          <td>{{ song.genres.join(', ') }}</td>
        </tr>
      </tbody>
    </table>`,
  link: function(s,e,a){
    s.toggle = function (song) {
      if (song !== PlayerFactory.getCurrentSong()) {
        PlayerFactory.start(song, s.songs);
      } else if ( PlayerFactory.isPlaying() ) {
        PlayerFactory.pause();
      } else {
        PlayerFactory.resume();
      }
    };

    s.getCurrentSong = function () {
      return PlayerFactory.getCurrentSong();
    };

    s.isPlaying = function (song) {
      return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
      };
    }
  };
});

  // <button class="btn btn-default btn-xs" ng-click="toggle(song)">
  //             <span class="glyphicon" ng-class="{ 'glyphicon-pause': isPlaying(song), 'glyphicon-play': !isPlaying(song) }"></span>
  //           </button>