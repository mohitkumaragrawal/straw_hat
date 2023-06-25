const serviceAccount = require('../../service-account.json');

const { SessionsClient } = require('dialogflow');

export default async function (request, response) {
  const { queryInput, sessionId } = request.body;

  const sessionClient = new SessionsClient({ credentials: serviceAccount });
  const session = sessionClient.sessionPath('moviedb-otmh', sessionId);

  const responses = await sessionClient.detectIntent({ session, queryInput });

  const result = responses[0].queryResult;

  response.send(result);
}

// exports.dialogflowGateway = functions.https.onRequest((request, response) => {
//   cors(request, response, async () => {
//     const { queryInput, sessionId } = request.body;

//     const sessionClient = new SessionsClient({ credentials: serviceAccount });
//     const session = sessionClient.sessionPath('your-project', sessionId);

//     const responses = await sessionClient.detectIntent({ session, queryInput });

//     const result = responses[0].queryResult;

//     response.send(result);
//   });
// });
