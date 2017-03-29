'use strict';

angular.module('app.municipality')
  .controller('MunicipalityController', function($scope,$uibModal,$location,MainRestCall,NgTableParams) {


  		MainRestCall.listMunicipalities().then(function(data){
          $scope.tableData=data.data;
  				$scope.unitTable=new NgTableParams({},{dataset:$scope.tableData});

  		});

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

      $scope.editModal = function(row) {
        $uibModal.open({
            templateUrl: '../../views/municipalities/modal/modal.html',
            controller: function($scope, $uibModalInstance) {
                          $scope.editedObject=angular.copy(row);
                         $scope.ok = function () {
                            angular.merge(row,$scope.editedObject);
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

  });
