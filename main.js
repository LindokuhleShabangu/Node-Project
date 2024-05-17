const dialogflow = require("dialogflow");

// Your Google Cloud Platform project ID
const projectId = "your-project-id";


// Create a new session
const sessionClient = new dialogflow.SessionsClient();

async function detectIntent() {
  const sessionPath = sessionClient.sessionPath(projectId, "unique-session-id");

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: "Hello, how can I help you?",
        languageCode: "en-US",
      },
    },
  };

  // Send request and log the result
  const responses = await sessionClient.detectIntent(request);
  console.log("Detected intent");
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
}

detectIntent().catch(console.error);
