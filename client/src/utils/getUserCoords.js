export const getUserCoords = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const coords = [position.coords.longitude, position.coords.latitude];
        resolve(coords);
      },
      error => {
        reject(error);
        alert(
          'Please enable your location in order to use the application. If now you will not be able to browse jobs/users'
        );
      }
    );
  });
};
