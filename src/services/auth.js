import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api';

export async function getLightProfile() {
  try {
    const response = await axios.get(`${BASE_URL}/auth/profile`, {
      withCredentials: true,
    });

    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function postLogin(email, password) {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/login`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );

    // Devuelvo la propiedad data de nuestro server nesteada dentro de data de axios
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
