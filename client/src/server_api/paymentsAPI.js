export const getPackages = async () => {
  const response = await fetch('http://localhost:8000/api/payment/packages', {
    method: 'GET',
    credentials: 'include',
  });

  //Check response

  return await response.json();
};

export const createCheckout = async packageId => {
  const response = await fetch(
    'http://localhost:8000/api/payment/create-session',
    {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ packageId }),
    }
  );

  return await response.json();
};
