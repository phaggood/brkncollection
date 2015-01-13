    angular.module("makerApp")

        .controller("ProjectCtrl", ['$scope', '$meteorCollection',
            function ($scope, $meteorCollection) {

                $scope.projects = $meteorCollection(Projects);

                $scope.remove = function (project) {
                    $scope.projects.remove(project);
                };

                $scope.removeAll = function () {
                    $scope.projects.remove();
                };
            }
        ])

        .controller("ProjectDetailCtrl", ['$scope', '$stateParams', '$meteorObject',
            function ($scope, $stateParams, $meteorObject) {
                $scope.project = $meteorObject(Projects, $stateParams.projectId, false);

                $scope.save = function() {
                    $scope.project.save();
                };

                $scope.reset = function() {
                    $scope.project.reset();
                };

            }])

        .controller("GalleryCtrl", ['$scope',
            function ($scope) {
            }
        ])

        .controller("FileManagerCtrl", ['$scope',
            function ($scope) {
            }
        ]);
