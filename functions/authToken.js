const { default: axios } = require("axios")


module.exports.handler = async (event, context) => {
  const hostUrl = 'https://mc-manage.us.auth0.com';

  const options = { 
    method: 'POST',
    url: `${hostUrl}/oauth/token`,
    headers: { 
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      client_id: process.env.REACT_APP_AUTH0_API_CLIENTID,
      client_secret: process.env.REACT_APP_AUTH0_API_CLIENTSECRET,
      audience: "https://mc-manage.us.auth0.com/api/v2/",
      grant_type: "client_credentials"
    }
  };

  const data = await axios.request(options)

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data.data.access_token)
  }
}