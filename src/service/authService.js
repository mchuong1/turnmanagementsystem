import Axios from 'axios';
const hostUrl = '/.netlify/functions';

export function getEmployees(){
  const options = { 
    method: 'get',
    url: `${hostUrl}/employee`,
    headers: { 
      'content-type': 'application/json',
    },
  };
  return Axios.request(options);
}