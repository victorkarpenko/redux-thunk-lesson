import axios from 'axios';

export const requestPostAddItem = (item) => {
    axios.post('http://localhost:5001/todos', item)
        .then(({ data }) => data)
        .catch(() => { console.log('error') });
}