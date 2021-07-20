import * as functions from "firebase-functions";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ssrApp = require("../ssr/index.js");

exports.ssr = functions.https.onRequest(ssrApp.handler);
