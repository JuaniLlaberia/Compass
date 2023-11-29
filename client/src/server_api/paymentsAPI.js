export const getPackages = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/payment/packages', {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const createCheckout = async packageId => {
  try {
    const response = await fetch(
      'http://localhost:8000/api/payment/create-session',
      {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ packageId }),
      }
    );

    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (err) {
    throw err;
  }
};
