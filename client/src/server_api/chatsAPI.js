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

export const getMessages = async ({ chatId, page }) => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/chats/messages/${chatId}?page=${page}`,
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

export const getMatches = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/matches', {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const deleteMatch = async matchId => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/matches/cancel/${matchId}`,
      { method: 'DELETE', credentials: 'include' }
    );

    if (!response.ok) throw new Error(response.statusText);
  } catch (err) {
    throw err;
  }
};
