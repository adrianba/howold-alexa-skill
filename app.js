const Alexa = require("alexa-sdk");

const handlers = {
  LaunchRequest: function() {
    this.emit("AMAZON.HelpIntent");
  },
  "AMAZON.HelpIntent": function() {
    this.emit(":tell", "This is the Alexa How Old skill. You can say, How old is Bob.");
  },
  HowOldIntent: function() {
    this.emit(":tell", "I'm not sure.");
  }
};

exports.handler = function(event, context, callback) {
  let alexa = Alexa.handler(event, context, callback);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
