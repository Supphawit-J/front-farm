import axios from 'axios'

const API_ENDPOINT = 'http://localhost:3333'
const API_VERSION = 'api/v1'
// const JSON_HEADER = { 'Content-Type': 'application/json' }

export async function getData (table) {
  return await axios(
    {
      method: 'GET',
      url: `${API_ENDPOINT}/${API_VERSION}/${table}`
    }
  ).then(response => response.data.data)
}

export async function getDataRef (table, value) {
  return await axios(
    {
      method: 'GET',
      url: `${API_ENDPOINT}/${API_VERSION}/${table}?references=${value}`
    }
  ).then(response => response.data.data)
}

export async function getDataById (table, value, id) {
  return await axios(
    {
      method: 'GET',
      url: `${API_ENDPOINT}/${API_VERSION}/${table}/${id}?references=${value}`
    }
  ).then(response => response.data.data)
}
