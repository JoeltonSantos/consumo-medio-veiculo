//Modulo
var calModulo = angular.module('consumoApp', []);

//Controler
calModulo.controller('appController', function ($scope) {
    $scope.Calcular = function () {
        
        
        if ($scope.k != null && $scope.l != null) {
            var solucao = $scope.k / $scope.l;
            $scope.situacao = solucao + "KM/L!";
            $scope.resultado = true;
        }

    }

    $scope.Limpar = function () {
        $scope.l = null;
        $scope.k = null;
        $scope.resultado = false;
    }
});