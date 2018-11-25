import axios from 'axios';
export default class API {

  headers = {
    'user-key': '2ddc61f7ec0defb1767ae9848a43ce56',
  }

  // TODO: add a switch and make appropriate calls
  call(uri, params = '') {
    return axios.get(uri, {
      params,
      headers: this.headers
    })
      .then(({ data }) => {
        return new Promise((resolve) => {
          return resolve(data);
        });
      })
      .catch(function (error) {
        return new Promise((_, reject) => {
          return reject(error);
        });
      });
  }

}