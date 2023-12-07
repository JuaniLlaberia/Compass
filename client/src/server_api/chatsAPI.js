export const getChats = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/chats', {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) throw new Error('Something went wrong!');

    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const getMessages = async chatId => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/chats/messages/${chatId}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    );

    if (!response.ok) throw new Error('Something went wrong!');

    return await response.json();
  } catch (err) {
    throw err;
  }
};
