import Axios from 'axios'

const url = 'http://localhost:4201'

export function saveClient(data) {
  return Axios.request({method: 'post', url: `${url}/client`, data: data})
};