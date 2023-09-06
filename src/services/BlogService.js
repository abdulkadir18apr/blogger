import axios from 'axios';

const API_URL = 'https://blog-portal-prod-production.up.railway.app/post'; 

export const fetchPostService = async() => {
  try {
    const response = await axios.get(`${API_URL}/allpost`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Invalid response status');
    }
  } catch (error) {
    console.log(error)

  }
};