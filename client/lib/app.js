angular.module('makerApp', ['angular-meteor', 'ui.router'])


    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
        function ($urlRouterProvider, $stateProvider, $locationProvider) {

            $locationProvider.html5Mode(true);

            $stateProvider
                .state('projects', {
                    url: '/projects',
                    templateUrl: '../projects/views/project-list.tpl',
                    controller: 'ProjectCtrl'
                })
                .state('projectDetail', {
                    url: '/projects/:projectId',
                    templateUrl: '../projects/views/project-details.tpl',
                    controller: 'ProjectDetailCtrl'
                });

            $urlRouterProvider.otherwise("/projects");
        }])

