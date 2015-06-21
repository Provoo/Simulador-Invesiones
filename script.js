// Code goes here
var myApp = angular.module('myApp', []);

 myApp.controller('calculatorCtrl', function($scope) {
     

   function rendimiento(montoInicial,rendimiento,dias){
   	return (montoInicial*rendimiento/100*dias)/360;
   }
   
   function calcTotal(monto_inicial,monto_mensual, porcentaje, meses){
      var total_monto = monto_inicial;
      var rendimiento = 0;
      var total_rendimiento = 0;

      for( var mes = 0; mes <=meses; mes++){
          rendimiento=(total_monto*porcentaje/100)/12;
          total_rendimiento +=rendimiento; 
          total_monto+=rendimiento+monto_mensual;
          $scope.objmeses.push({"mes" : (mes+1), "monto": total_monto, "rendimiento":rendimiento});

        }
      return [total_monto,total_rendimiento];
    }
  function reset(){
      $scope.objmeses=[];
      $scope.result =[];
  }
   
   $scope.calc = calcTotal;
   $scope.calculador = rendimiento;
   $scope.reset=reset;
   });  
   