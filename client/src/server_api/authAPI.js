export const getAuthUser = async () => {
  const response = await fetch('http://localhost:8000/api/user/me', {
    method: 'GET',
    credentials: 'include',
  });

  // if (!response.ok)

  return await response.json();
};

export const logoutUser = async () => {
  try {
    await fetch('http://localhost:8000/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
  } catch (err) {
    console.log(err);
  }
};
