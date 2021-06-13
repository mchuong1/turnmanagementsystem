import Axios from 'axios'

const hostUrl = '/.netlify/functions'

export function saveClient(data) {
  return Axios.request({method: 'post', url: `${hostUrl}/clients`, data: data})
};