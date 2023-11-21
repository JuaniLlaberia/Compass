export const updateUser = async ({ userInfo }) => {
  try {
    const response = await fetch('http://localhost:8000/api/user/update', {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    // if(!response.ok)

    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
