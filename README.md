angular-form-util
================

Use AngularJs control form submit, with POST method and page forwarding.

Installation
-------
```bash
npm install git+https://github.com/gengen1988/angular-form-util.git
```

Usage
-------
```js
angular.module('app', ['form-util'])
  .controller('Controller', Controller);

function Controller($scope, post) {

  $scope.submit = function(data) {
    post('http://www.google.com', data);
  }

}
```
