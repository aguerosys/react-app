import axios from "axios";

export const createNote = ({content, date}) => {
    return axios
    .post('http://localhost:3001/api/notes', {
      content,
      date
    })
    .then(response => {
      return response.data
    })
}