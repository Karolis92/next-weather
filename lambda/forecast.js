const request = require("request-promise");

const { API_KEY } = process.env;
const API_URL = `https://api.openweathermap.org/data/2.5/onecall?appid=${API_KEY}`;

let { CORS_WHITELIST } = process.env;
if (CORS_WHITELIST) {
  CORS_WHITELIST = CORS_WHITELIST.replace(/ /g, "").split(",");
}

const getResponseHeaders = request => {
  const headers = {
    "content-type": "application/json"
  };
  const { origin } = request.headers;
  if (origin && CORS_WHITELIST?.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  return headers;
};

exports.handler = (event, context, callback) => {
  const qs = event.queryStringParameters;
  const { lat, lon } = qs;
  if (!lat || !lon) {
    callback("You must provide a latitude and longitude");
    return;
  }

  const options = {
    qs,
    json: true
  };
  request(API_URL, options)
    .then(response => {
      callback(null, {
        body: JSON.stringify(response),
        statusCode: 200,
        headers: getResponseHeaders(event)
      });
    })
    .catch(error => {
      callback(error);
    });
};
