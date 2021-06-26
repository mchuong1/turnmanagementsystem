import Axios from 'axios';
const hostUrl = '/.netlify/functions';
const authUrl = 'https://mc-manage.us.auth0.com';
export function getEmployees(accessToken, query = ''){
  const options = {
    method: 'GET',
    url: `${authUrl}/api/v2/users`,
    params: {q: query, search_engine: 'v3'},
    headers: {authorization: `Bearer ${accessToken}`}
  }
  return Axios.request(options);
}

export function getRoles(accessToken, id) {
  const options = {
    method: 'GET',
    url: `${hostUrl}/api/v2/users/${id}/roles`,
    headers: {authorization: `Bearer ${accessToken}`}
  }
  return Axios.request(options);
}

export function getAccessToken() {
  const options = { 
    method: 'get',
    url: `${hostUrl}/authToken`,
    headers: { 
      'content-type': 'application/json',
    },
  };
  return Axios.request(options);
}