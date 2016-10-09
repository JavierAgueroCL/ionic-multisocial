angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('SocialsCtrl', function($scope) {
  $scope.socials = [
    { title: 'Facebook', id: "facebook", icon : 'facebook.png' }
    // { title: 'Google Hangouts', id: 2, icon : 'hangouts.png' },
    // { title: 'Twitter', id: 3, icon : 'twitter.png' },
    // { title: 'AIM', id: 4, icon : 'twitter.png' },
    // { title: 'WhatsApp', id: 5, icon : 'whatsapp.png' }
  ];
})

.controller('FacebookCtrl', function($scope, $stateParams) {
  $scope.amigos = [
    { nombre: 'Juan Perez Gonzales', fbid: 345638762346, avatar : 'avatar.jpg' },
    { nombre: 'Victor Acuña Salazar', fbid: 945389457343, avatar : 'avatar.jpg' },
    { nombre: 'Constanza Zuñiga Barrientos', fbid: 843583495, avatar : 'avatar.jpg' },
    { nombre: 'Cristian Godoy Hernandes', fbid: 834895793852, avatar : 'avatar.jpg' }
  ];

})

.controller('FacebookChatCtrl', function($scope, $stateParams) {
  // $scope.friendid = $stateParams.fbid;
  $scope.friendid = 'Constanza Zuñiga Barrientos';
  $scope.mensajes = [
    { texto: 'Hola!', msgid: 345638762346, from : 'me', date: '12-11-1988 12:23' },
    { texto: 'Como estas?', msgid: 345638762346, from : 'friend', date: '12-11-1988 12:23' }
  ];
});