export const getAuthUser = async () => {
  const response = await fetch('http://localhost:8000/api/user/me', {
    method: 'GET',
    credentials: 'include',
  });

  // if (!response.ok)

  return await response.json();
};
