import axios from 'axios';

axios.create({
    baseURL : 'https://react-my-burger.firebaseio.com'
})

export default axios;