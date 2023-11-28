export const updateUser = async userInfo => {
  const isFormData = userInfo instanceof FormData;

  const optionsRegular = {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userInfo),
  };

  const optionsFormData = {
    method: 'PATCH',
    credentials: 'include',
    body: userInfo,
  };

  try {
    const response = await fetch(
      'http://localhost:8000/api/user/update',
      isFormData ? optionsFormData : optionsRegular
    );

    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const deleteUser = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/user/delete', {
      method: 'DELETE',
      credentials: 'include',
    });

    if (!response.ok) throw new Error(response.statusText);
  } catch (err) {
    throw err;
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/user', {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const swipeRight = async userId => {
  try {
    const response = await fetch('http://localhost:8000/api/swipes/right', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ swipedUserId: userId }),
    });

    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const swipeLeft = async userId => {
  try {
    const response = await fetch('http://localhost:8000/api/swipes/left', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ swipedUserId: userId }),
    });

    if (!response.ok) throw new Error(response.statusText);
  } catch (err) {
    throw err;
  }
};
