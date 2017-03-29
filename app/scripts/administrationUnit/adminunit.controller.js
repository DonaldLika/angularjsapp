'use strict';

angular.module('app.adminUnit')
  .controller('AdminUnitsController', function($scope,$location,$uibModal,RestCall,NgTableParams) {


         RestCall.listAdministrationUnits().then(function(data){
              $scope.tableData=data.data.data;
              $scope.unitTable=new NgTableParams({},{dataset:$scope.tableData});
          });


          //To Be Implemented

          // RestCall.listcityVillage().then(function(data){
          //     $scope.cityVillage=data.data;
          //
          //     console.log($scope.cityVillage);
          // });
          
          //
          // $scope.$watch('tableData', function() {
          //       //Rasti kur kane ndryshuar te dhenat e tabeles
          //     console.log("u updatua");
          // });
          

         var deleteRow=function(selectedObject)
         {
             var index=$scope.tableData.indexOf(selectedObject);
               console.log(index);

             if(index != -1) {
                   $scope.tableData.splice(index, 1);
                    $scope.unitTable.reload();
               return true;
             }
               return false;
         };

       var saveedit=function(row)
       {

          angular.forEach($scope.tableData,function(data){
            if(data.administrativeUnitId==row.administrativeUnitId)
            {
              angular.merge(data,row);
              return true;
            }
          });
          return false;
       };

      $scope.editModal = function(row) {
        $uibModal.open({
            templateUrl: '../../views/administrationunit/modal/modal.html',
            controller: function($scope, $uibModalInstance) {
                          $scope.editedObject=angular.copy(row);
                         $scope.ok = function () {
                            saveedit($scope.editedObject);
                            $uibModalInstance.close();
                            };
                        $scope.cancel = function () {
                          $uibModalInstance.dismiss('Cancel');
                        };
               }
        });
      };     
      $scope.deleteModal=function(row)
      {
        $uibModal.open({
            templateUrl: 'promptdialog.html',
            controller: function($scope, $uibModalInstance) {
                         $scope.ok = function () {
                                deleteRow(row);
                                $uibModalInstance.close();
                            };

                        $scope.cancel = function () {
                          $uibModalInstance.dismiss('cancel');
                        };
               }
        })};



  }).directive('adminUnitTable',function(){

    return {
        restrict: 'E',
        templateUrl : 'adminunitTable.html'
    };

  });
