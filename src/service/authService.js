import Axios from 'axios'

const hostUrl = 'https://mc-manage.us.auth0.com'

export function getEmployees(query = ''){
  const options = {
    method: 'GET',
    url: `${hostUrl}/api/v2/users`,
    params: {q: query, search_engine: 'v3'},
    headers: {authorization: `Bearer ${process.env.REACT_APP_AUTH0_TOKEN}`}
  }
  return Axios.request(options);
}

export function getRoles(id) {
  const options = {
    method: 'GET',
    url: `${hostUrl}/api/v2/users/${id}/roles`,
    headers: {authorization: `Bearer ${process.env.REACT_APP_AUTH0_TOKEN}`}
  }
  return Axios.request(options);
}

export function getAccessToken() {
  const options = { 
    method: 'POST',
    url: 'https://mc-manage.us.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: `{
      "client_id":"${process.env.REACT_APP_AUTH0_CLIENTID}",
      "client_secret":"${process.env.REACT_APP_AUTH0_CLIENTSECRET}",
      "audience":"https://mc-manage.us.auth0.com/api/v2/",
      "grant_type":"client_credentials"}`
  };
  return Axios.request(options);
}