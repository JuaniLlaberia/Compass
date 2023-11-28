export const getAuthUser = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/user/me', {
      method: 'GET',
      credentials: 'include',
    });

    return await response.json();
  } catch (err) {
    throw new Error(err.message);
  }
};

export const logoutUser = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  } catch (err) {
    throw err;
  }
};
