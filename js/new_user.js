var app = angular.module('Locus', ['ngFileUpload', 'ngImgCrop']);

app.controller('MyCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {
    $scope.upload = function (dataUrl) {


        console.log($scope.firstname);
        console.log(Upload.dataUrltoBlob(dataUrl));

        /*Upload.upload({

    url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
    data: {
        file: Upload.dataUrltoBlob(dataUrl)
    },
}).then(function (response) {
    $timeout(function () {
        $scope.result = response.data;
    });
}, function (response) {
    if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
}, function (evt) {
    $scope.progress = parseInt(100.0 * evt.loaded / evt.total);
});*/
    };



             }])

.directive('pwCheck', [function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            var firstPassword = '#' + attrs.pwCheck;
            elem.add(firstPassword).on('keyup', function () {
                scope.$apply(function () {
                    var v = elem.val() === $(firstPassword).val();
                    ctrl.$setValidity('pwmatch', v);
                });
            });
        }
    }
  }]);