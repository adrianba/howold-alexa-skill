const Alexa = require("alexa-sdk");

const handlers = {
  LaunchRequest: function() {
    this.emit(":tell", "This is the Alexa How Old skill.");
  }
};

exports.handler = function(event, context, callback) {
  let alexa = Alexa.handler(event, context, callback);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
