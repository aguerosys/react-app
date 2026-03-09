
import axios from 'axios'

const API_URL = 'http://localhost:3001/api/notes'

export const deleteNote = (id) => {
  return axios.delete(`${API_URL}/${id}`)
}