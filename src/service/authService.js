import Axios from 'axios';

const hostUrl = '/.netlify/functions';

export const getEmployees = () => {
  const options = {
    method: 'get',
    url: `${hostUrl}/employee`,
    headers: {
      'content-type': 'application/json',
    },
  };
  return Axios.request(options);
}
