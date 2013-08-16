'use strict';

/* Controllers */

angular.module('soulPlayer.controllers', []).
  controller('AlbumListCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('http://localhost:8080/albums').success(function(data) {
      $scope.albums = data;
    });
    $scope.orderProp = 'title';
  }]).
  controller('AlbumDetailCtrl', ['$scope', '$routeParams', '$http', 'audioSource', function($scope, $routeParams, $http, audioSource) {
    $http.get('http://localhost:8080/albums/:id', {id: "this.id"}).success(function(data) {
      $scope.album = data;
    });
    $scope.play = function(album, song) {
      audioSource.setSrc({ 'album': album, 'song': song });
    };
  }]).
  controller('NowPlayingCtrl', ['$scope', 'audioSource', function($scope, audioSource) {
    $scope.getAlbum = function() {
      return audioSource.getAlbum();
    };
    $scope.getSong = function() {
      return audioSource.getSong();
    };
  }]).
  controller('AddMusicCtrl', ['$scope', '$routeParams', function($scope, $routeParams] {
    $http.post('http://localhost:8080/albums', {title: 'title', mp3: 'mp3'}.success(function(){
      
    }))
  });
