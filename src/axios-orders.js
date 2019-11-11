import axios from 'axios';

const instance =  axios.create({
	baseURL: 'https://udemy-burger-react-guide.firebaseio.com/'

});

export default instance
