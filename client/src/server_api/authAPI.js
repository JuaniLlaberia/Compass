const URL = import.meta.env.VITE_URL;

export const getAuthUser = async () => {
  try {
    const response = await fetch(`${URL}/user/me`, {
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
    const response = await fetch(`${URL}/auth/logout`, {
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
