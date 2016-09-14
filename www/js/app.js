// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'app.services' is found in services.js
// 'app.controllers' is found in every file of controllers
var controllerModule = angular.module('app.controllers', []);

angular.module('app', ['ionic', 'app.controllers', 'app.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.

        $stateProvider

            .state('connexion', {
                url: '/connexion',
                templateUrl: 'templates/connexion.html',
                controller: 'ConnexionCtrl'
            })

            .state('inscription', {
                url: '/inscription',
                templateUrl: 'templates/inscription.html',
                controller: 'InscriptionCtrl'
            })

        // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:

            .state('tab.accueil', {
                url: '/accueil',
                views: {
                    'tab-accueil': {
                        templateUrl: 'templates/accueil.html',
                        controller: 'AccueilCtrl'
                    }
                }
            })

            .state('tab.flash', {
                url: '/flash',
                views: {
                    'tab-accueil': {
                        templateUrl: 'templates/flash.html'
                    }
                }
            })

            .state('tab.confirmation', {
                url: '/confirmation',
                views: {
                    'tab-accueil': {
                        templateUrl: 'templates/confirmation.html',
                    }
                }
            })

            .state('tab.profil', {
                url: '/profil',
                views: {
                    'tab-profil': {
                        templateUrl: 'templates/profil.html',
                        controller: 'ProfilCtrl'
                    }
                }
            })


            .state('tab.aide', {
                url: '/aide',
                views: {
                    'tab-aide': {
                        templateUrl: 'templates/aide.html',
                        controller: 'AideCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/connexion');

    });
