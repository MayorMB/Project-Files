# Project-Files
How to Set Up this Sample Implementation:

1) Access the code and instructions at the following GitHub Repo URL:
https://github.com/MayorMB/Project-Files

2) In a new directory, create a package.json file to be used with the node.js (client) SDK:

**mkdir hello-node-client && cd hello-node-client && npm init**

3) Install the LaunchDarkly SDK:

**npm install launchdarkly-node-client-sdk@2.0.4 --save**

4) In the index.js file in this Project-Files GitHib repo, replace the example user key in quotes with "User A".  This user key will be recognized in LaunchDarkly.

**var user = {
  key: "example-user-key"
};**

4) Replace the SDK key from line 10 of the index.js file with your own SDK key.  See a copy of line 10 below.

**const ldClient = LaunchDarkly.initialize('62ae97e36327c714e578c30a', user);**

5) Create a feature flag that has specifically has the name and key, "new-planning-ui."

6) Run the application using the output from the modified index.js file in this Project-Files GitHib repo, including the updated user key and SDK key.
