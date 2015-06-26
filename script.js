// Code goes here
var myApp = angular.module('myApp', []);

 myApp.controller('calculatorCtrl', function($scope) {
     

   function Calular_rendimiento(montoInicial,rendimiento,dias){
   	return (montoInicial*rendimiento/100*dias)/360;
   }
   
   function calcTotal(monto_inicial,monto_mensual, porcentaje, meses){
      var total_monto = monto_inicial;
      var rendimiento = (total_monto*porcentaje/100)/12;
      var total_rendimiento = rendimiento;

      for( var mes = 0; mes <=meses; mes++){
        
        if(mes === 0){
         
        }
        else{
          total_monto+=rendimiento+monto_mensual;
          rendimiento=(total_monto*porcentaje/100)/12;
          total_rendimiento +=rendimiento; 

        }
        
        $scope.objmeses.push({"mes" : (mes+1), "monto": total_monto, "rendimiento":rendimiento});

        }
      return [total_monto+rendimiento,total_rendimiento];
    }
  function reset(){
      $scope.objmeses=[];
      $scope.result =[];
  }
   
   $scope.calc = calcTotal;
   $scope.calculador = Calular_rendimiento;
   $scope.reset=reset;
   });  
