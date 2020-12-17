const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  const time = new Date().toTimeString();
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  const githubObj = JSON.stringify(github, undefined, 2);
  const githubContext = JSON.stringify(github.context, undefined, 2);

  console.log(`Hello ${nameToGreet}!`);
  console.log(`The event payload: ${payload}`);
  console.log(`The event payload: ${githubObj}`);
  console.log(`The event payload: ${githubContext}`);

  core.setOutput('time', time);
} catch (error) {
  core.setFailed(error.message);
}