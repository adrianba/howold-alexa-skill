const Alexa = require("alexa-sdk");
const APP_ID = "amzn1.ask.skill.cfd3f370-315a-46fb-94d3-7b9c4cb7414e";

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
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
