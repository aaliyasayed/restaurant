export const hitGeolocation = ( cb = null, forceCheck = false ) => {
  if (navigator.geolocation) {
    navigator.permissions.query({ name: 'geolocation' }).then((status) => {
      if (status.state === 'denied' && forceCheck) {
        alert('You have already blocked the geolocation.');
      } else {
        navigator.geolocation.getCurrentPosition(cb && cb);
      }
    });
  } else {
    window.alert('Geolocation is not supported by this browser.');
  }
};

export const storeCurrentCityToLocalStorage = (city) => {
  localStorage.setItem('current-city', JSON.stringify(city));
};

export const getCurrentCityFromLocalStorage = () => {
  return localStorage.getItem('current-city') ? JSON.parse(localStorage.getItem('current-city')) : null;
};

export const storeLikesToLocalStorage = (likes) => {
  localStorage.setItem('liked-restaurants', JSON.stringify(likes));
};

export const getLikesFromLocalStorage = () => {
  return localStorage.getItem('liked-restaurants') ? JSON.parse(localStorage.getItem('liked-restaurants')) : [];
};


