/**
 * @author Alvaro Paçó <alvaro@scalasoft.com.br>
 * @see {@link http://www.geradorcpf.com/javascript-validar-cpf.htm}
 */
(function () {
  'use strict';

  angular.module('validate-cpf', [])
  /**
   * Validate CPF directive
   * @param {ngModel} model The Model to bind
   * @returns {boolean/'undefined'}
   */
    .directive('validateCpf', function () {
      return {
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
          element.bind("blur", function () {
        	  scope.$apply(function(){
	            //valida o cpf
	            ctrl.$setValidity('validateCpf', validaCPF(ctrl.$modelValue));
	            //scope.$apply();
	            
	            if (ctrl.$isEmpty(ctrl.$modelValue)) {
		              // consider empty models to be valid
		              //return false;
	            	  // versão original comentada acima ********** abaixo a versão alterada	
	            	ctrl.$setValidity('validateCpf', false);
		            return undefined;
		        }
	
	            //if cpf invalido
	            if (ctrl.$dirty && ctrl.$invalid) {
	              
	              // Setting $valid to false
	              ctrl.$setValidity('validateCpf', false);
	              // Needle to work
	              return undefined;
	            } else {
	             
	              // Return the same value to work with ui-mask
	              // because if return another value, the ui-mask
	              // will be called again and validate too.
	              return ctrl.$viewValue;
	            }
        	  });
          });

          /**
           * Calculate validity of string
           * @param {string} str
           * @returns {boolean}
           */
          function validaCPF(str) {
            if (str) {
              str = str.replace('.', '');
              str = str.replace('.', '');
              str = str.replace('-', '');

              var cpf = str;
              var numeros, digitos, soma, i, resultado, digitos_iguais;
              digitos_iguais = 1;
              if (cpf.length < 11)
                return false;
              for (i = 0; i < cpf.length - 1; i++)
                if (cpf.charAt(i) != cpf.charAt(i + 1)) {
                  digitos_iguais = 0;
                  break;
                }
              if (!digitos_iguais) {
                numeros = cpf.substring(0, 9);
                digitos = cpf.substring(9);
                soma = 0;
                for (i = 10; i > 1; i--)
                  soma += numeros.charAt(10 - i) * i;
                resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                if (resultado != digitos.charAt(0))
                  return false;
                numeros = cpf.substring(0, 10);
                soma = 0;
                for (i = 11; i > 1; i--)
                  soma += numeros.charAt(11 - i) * i;
                resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                if (resultado != digitos.charAt(1))
                  return false;
                return true;
              }
              else
                return false;
            }
          }

        }
      };
    });

}).call(this);