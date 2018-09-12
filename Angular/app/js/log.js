angular.module('log', ['ui.router'])
    .config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state("log", {
                    url: '/log',
                    templateUrl: 'view/log.html',
                    controller: function($scope,loginService,$rootScope,$state){
                        $scope.user = {
                            name:"",
                            pwd:""
                        }
                        $scope.loginState = true;
                        $scope.smEnter = function(){
                            $scope.loginState = false;
                        }
                        $scope.smOuter = function(){
                            $scope.loginState = true;
                        }
                        $scope.subLogin = function(){
                            $rootScope.user = loginService.login($scope.user);
                            if($rootScope.user!=null)
                            {
                                $state.go('home.main');
                            }
                        }
                    },
                    ncyBreadcrumb:{
                        label:"登录",
                        parent:"home.main"
                    }

                })
        }
    ])