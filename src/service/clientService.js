import Axios from 'axios'

const hostUrl = process.env.REACT_APP_HOSTURL

export function saveClient(data) {
  return Axios.request({method: 'post', url: `${hostUrl}/client`, data: data})
};