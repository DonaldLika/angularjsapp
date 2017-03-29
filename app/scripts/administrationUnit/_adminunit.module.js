(function() {
    'use strict';

    angular
        .module('app.adminUnit', ['ngAnimate','ui.bootstrap'])

        .directive('tablecolor',function($interpolate){ //Interpolate values on controller

        	return {

        		compile: function(tElement,tAttributes){

        			// console.log(tAttributes.text+" in Compile");
        			// tElement.css("border","1px solid #FF0000") //
        			return {
        				pre: function(scope,iElement,iAttributes)
        				{
        					// console.log(iAttributes.elem+" pre");

        				},
        				post: function(scope,iElement,iAttributes){  
        					 if(JSON.parse(iAttributes.elem).municipalityId > 23)
        					 {
        					 	iElement.css("background-color","#e5ffe5");
				
        					}
							else{

							}
        					
        				}
        			};
        		},
        		controller: function($scope,$element,$attrs){
        			 var v=$interpolate($attrs.elem)($scope);


        			$scope.btnClick=function(){
        				alert("Hello");
        			};
					$scope.bbClick=function(){
        				alert("Hi");
        			}
        		}
        	}

        })
})();
