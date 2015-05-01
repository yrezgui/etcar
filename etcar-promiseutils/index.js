var Promise = require('es6-promise').Promise;

function defer() {
  var deferred = {};

  deferred.promise = new Promise(function (resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });

  return deferred;
}

function streamToPromise (stream) {
  var deferred = defer();

  stream.on('end', function end () {
    deferred.resolve();
  });

  return deferred.promise;
}

module.exports = {
  Promise: Promise,
  defer: defer,
  streamToPromise: streamToPromise
};