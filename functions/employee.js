const { default: axios } = require("axios");
// const _ = require('lodash');
const hostUrl = 'https://mc-manage.us.auth0.com';

function getEmployees(accessToken, query = ''){
  const options = {
    method: 'GET',
    url: `${hostUrl}/api/v2/users`,
    params: {q: query, search_engine: 'v3'},
    headers: {authorization: `Bearer ${accessToken}`}
  }
  return axios.request(options);
}


// function getRoles(accessToken, id) {
//   const options = {
//     method: 'GET',
//     url: `${hostUrl}/api/v2/users/${id}/roles`,
//     headers: {authorization: `Bearer ${accessToken}`}
//   }
//   return axios.request(options);
// }

function getToken(){
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

  return axios.request(options)
}

module.exports.handler = async () => {
  const { data: token } = await getToken();
  const { data: employees } = await getEmployees(token.access_token)

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employees)
  }
}