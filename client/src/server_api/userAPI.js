export const updateUser = async userInfo => {
  try {
    //Sending data with formData because of image
    const response = await fetch('http://localhost:8000/api/user/update', {
      method: 'PATCH',
      credentials: 'include',
      body: userInfo,
    });

    // if(!response.ok)
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
