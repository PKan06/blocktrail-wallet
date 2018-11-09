cordova.define("cordova-plugin-google-app-conversion-tracker.GoogleAppTracking", function(require, exports, module) {

/* global module, require */

var exec = require('cordova/exec');

module.exports = {
  track: function(conversionId, label, value, repeatable, success, fail) {
    exec(success, fail, 'GoogleAppTracking', 'track', [conversionId, label, value, repeatable]);
  }
};

});
