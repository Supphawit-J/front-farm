import axios from 'axios'

const API_ENDPOINT = 'https://thai-agriculture-backend-i5ty6jcapq-as.a.run.app/'
const API_VERSION = 'api/v1/'

export async function getData (table) {
  return await axios(
    {
      method: 'GET',
      url: `${API_ENDPOINT}/${API_VERSION}/${table}`
    }
  ).then(response => response.data.data)
}
