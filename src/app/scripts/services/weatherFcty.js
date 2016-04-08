export default /* @ngInject */ class WeatherFactory {
  constructor($http) {
    this.$http = $http;
    this.coords = {};

    this.weatherRequest = {
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/forecast/daily',
      params: {
        units: 'metric',
        appid: '346855c2d623ce435aca17ab44bf27b7'
      }
    };
  }

  getByCity(city) {
    delete this.weatherRequest.params.lat;
    delete this.weatherRequest.params.lon;

    this.weatherRequest.params.q = city;

    return this.$http(this.weatherRequest);
  }

  getByLocation(coords) {
    delete this.weatherRequest.params.q;

    this.weatherRequest.params.lat = coords.latitude;
    this.weatherRequest.params.lon = coords.longitude;

    return this.$http(this.weatherRequest);
  }

  // get longitude and latitude from Geolocation API supported by most browsers
  getGeoLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // console.log(position.coords);
          resolve(position);
        },
        (error) => {
          reject(error);
        },
        { enableHighAccuracy: true }
      );
    });
  }
}
