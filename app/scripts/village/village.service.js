angular.module('app.villages').factory('VillageRestCall', function ($http,$q,$httpParamSerializer) {

        var mainUrl= 'http://192.168.1.215:8080/addressService_gg/core/';

        var cityVillage=mainUrl+'listCityVillages';

        var listPostalCodes=mainUrl+"listPostalCodes/"  /* cittyVillageId*/

        var makeRestCall = function (url) {
            return $http.get(url)
                .then(function (response) {
                    if (typeof response.data === 'object') {
                        return response.data;  //succesfull
                    } else {
                        return $q.reject(response.data);
                    }

                }, function (response) {
                    return $q.reject(response.data);
                });
        };

        var postRestCall=function (url,data) {
             return  $http.post(url, data)
                   .then(function (response) {

                    if (response.status<=400) {
                        return response.data;
                    } else {
                        return $q.reject(response.data);
                    }

                }, function (response) {
                    return $q.reject(response.data);
                });
            };



        return {
            listcityVillage: function()
            {
                return makeRestCall(cityVillage);
            },
            listPostalCodes: function(param)
            {
              return postRestCall(listPostalCodes+param);
            }
        };
    });
