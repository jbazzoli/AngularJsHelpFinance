
(function () {
	'use strict';

	angular.module("myApp")
		.service("RestService", restService);

	restService.inject = ['$http'];

	function restService($http) {

		var vm = this;
		//vm.url = 'https://localhost:5001/'
		vm.url = 'https://localhost:44380/';

		vm.get = getCallback;
		vm.post = postCallback;
		vm.del = deleteCallback;
		vm.put = putCallback;

		function getCallback(path, options) {
			var opt = angular.extend({}, getOptions(), { method: "GET", url: vm.url + '' + path }, options);
			console.log(opt);
			return restCallback(opt);
		}

		function postCallback(path, data, options) {
			var opt =  angular.extend({}, postOptions(path ,data), { method: "POST", url: vm.url + '' + path, data: data }, options);
			console.log(opt);
			return restCallback(opt);
		}

		function putCallback(path, data, options) {
			var opt = angular.extend({}, getOptions(), { method: "PUT", url: vm.url + '' + path, data: data }, options);
			return restCallback(opt);
		}

		function deleteCallback(path, data, options) {
			var opt = angular.extend({}, getOptions(), { method: "POST", url: vm.url + '' + path, data: data }, options);
			return restCallback(opt);
		}


		function restCallback(options) {
			//			$log.info(options);
			return $http(options).then(function (response) {
				//			$log.debug(response);
				if (response.data.response === undefined)
					return response.data;
				return response.data.response;
			});/*.catch(function (reason) {
				$log.error("Error: " + reason);
				if (reason.status == 401) {
					if (angular.isString(reason.data)) {
						LoginService.logout();
						return;
					}
				}
				return $q.reject(reason);
			});*/
		}

		/*	function getToken() {
				return localStorageService.get('token');
			}*/

		function getOptions() {
			return {
				method: "GET",
				url: vm.url,
				cache: false,
				//headers: {  "Content-Type": "application/json" }
				headers: { "Content-Type": "application/json" }
			};
		}
		function postOptions(path, data) {
			return {
				method: 'POST',
				dataType: 'json',
				cache: false,
				url: vm.url + ''+ path,
				headers: {
					//"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
					"Content-Type":  "application/json; charset=UTF-8"
				},
				data: data
			}
		};
	}

})();
