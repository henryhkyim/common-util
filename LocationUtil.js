function myCurrentPosition() {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
  }, (error) => {
    console.log(error);
  },
  {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
}

export default {myCurrentPosition: myCurrentPosition};
