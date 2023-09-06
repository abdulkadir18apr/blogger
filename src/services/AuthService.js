import axios from 'axios';

const API_URL = 'https://blog-portal-prod-production.up.railway.app/user'; 

export const loginService = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

   
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Invalid response status');
    }
  } catch (error) {
    console.log(error)

  }
};
export const signupService = async (firstName,lastName,email,password,designation,contact,gender) => {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        firstName,
        lastName,
        email,
        password,
        designation,
        contact,
        gender
      });
  
     
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Invalid response status');
      }
    } catch (error) {
      console.log(error)
      
    }
  };
  
