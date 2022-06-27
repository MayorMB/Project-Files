// Import the LaunchDarkly client
var LaunchDarkly = require('launchdarkly-node-client-sdk');

// Set up the user properties. This user should appear on your LaunchDarkly users dashboard
// soon after you run the demo.
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
  // events to LaunchDarkly before the program exits. If analytics events are not delivered,
  // the user properties and flag usage statistics will not appear on your dashboard. In a
  // normal long-running application, the SDK would continue running and events would be
  // delivered automatically in the background.
  ldClient.close();
}).catch(function(error) {
  showMessage("SDK failed to initialize: " + error);
  process.exit(1);
});
