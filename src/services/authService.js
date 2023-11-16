const API_URL = 'http://localhost:5000';

const authService = {
  login: async (username, password) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        return data;
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      throw new Error('An error occurred while logging in.');
    }
  },
};

export default authService;
