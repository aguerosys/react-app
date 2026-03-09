import axios from "axios";

export const getAllNotes = () => {
    return axios
    // .get('https://jsonplaceholder.typicode.com/posts')
    .get('http://localhost:3001/api/notes')
    .then(response => {
      return response.data
    })

}