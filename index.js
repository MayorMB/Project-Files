// Import the LaunchDarkly client
var LaunchDarkly = require('launchdarkly-node-client-sdk');

// User properties. 
var user = {
  key: "example-user-key"
};

// Create a single instance of the LaunchDarkly client
const ldClient = LaunchDarkly.initialize('62ae97e36327c714e578c30a', user);

function showMessage(s) {
  console.log("*** " + s);
  console.log("");
}
ldClient.waitForInitialization().then(function() {
  showMessage("SDK successfully initialized!");
  const flagValue = ldClient.variation("new-planning-ui", false);

  showMessage("Feature flag " + "new-planning-ui" + " is " + flagValue + " for this user");

  // Here we ensure that the SDK shuts down cleanly and has a chance to deliver analytics
  // events to LaunchDarkly before the program exits.
  ldClient.close();
}).catch(function(error) {
  showMessage("SDK failed to initialize: " + error);
  process.exit(1);
});
