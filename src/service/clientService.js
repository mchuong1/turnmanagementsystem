import Axios from 'axios'
import fileDownload from 'js-file-download';

const hostUrl = '/.netlify/functions'

export function saveClient(data) {
  return Axios.request({method: 'post', url: `${hostUrl}/clients`, data});
};

export function getClient() {
  return Axios.request({method: 'get', url: `${hostUrl}/clients`});
}

export function downloadCSV(){
  return Axios.request({method: 'get', url: `${hostUrl}/downloadCsv`, responseType: 'blob'})
  .then((response) => fileDownload(response.data, 'customers.csv'));
}

export function sendEmail() {
  return Axios.request({method: 'get', url: `${hostUrl}/email`});
}