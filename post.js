angular.module('form-util', [])
  .factory('post', PostFactory);

function PostFactory() {
  var form = document.createElement('form');
  form.style.display = 'none';
  form.method = 'POST';
  document.body.appendChild(form);

  return function(url, data) {
    form.action = url;
    Object.keys(data).forEach(function(key) {
      var el = document.createElement('input');
      el.name = key;
      el.value = data[key];
      form.appendChild(el);
    });
    form.submit();
  };
}

if (module) {
  module.exports = 'form-util';
}
