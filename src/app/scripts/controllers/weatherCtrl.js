export default /* @ngInject */ class WeatherController {
  constructor($scope, $stateParams, $http, WeatherFactory) {
    this.$http = $http;
    this.WeatherFactory = WeatherFactory;

    this.weatherData = [];
    this.forecastCity = 'Umea';
    this.coords = [];
    this.pos = {};
    this.weathericon = '';

    this.searchByCity();
    this.getGeoPosition();

  }

  searchByCity() {
    this.WeatherFactory.getByCity(this.forecastCity).then(result => {
      console.log(result);
      this.weatherData = result.data;
    });
  }

  getGeoPosition() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // this.coords = [position.coords.latitude, position.coords.longitude];
        this.pos.longitude = position.coords.longitude;
        this.pos.latitude = position.coords.latitude;
        this.searchByLocation(this.pos);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchByLocation(coordinates) {
    this.WeatherFactory.getByLocation(coordinates)
      .then(result => {
        this.weatherData = result.data;
        // console.log(result);
      });
  }

  checkIcon(iconres) {
    // console.log(iconres);
    // console.log('called');
    // relates to the json repsonses of the api we are using
    switch (iconres) {
      case "01d":
        this.weathericon = "B";
        return this.weathericon;
      case "01n":
        this.weathericon = "C";
        return this.weathericon;
      case "02d":
        this.weathericon = "H";
        return this.weathericon;
      case "02n":
        this.weathericon = "I";
        return this.weathericon;
      case "03d":
        this.weathericon = "N";
        return this.weathericon;
      case "03n":
        this.weathericon = "N";
        return this.weathericon;
      case "04d":
        this.weathericon = "Y";
        return this.weathericon;
      case "04n":
        this.weathericon = "Y";
        return this.weathericon;
      case "09d":
        this.weathericon = "Q";
        return this.weathericon;
      case "09n":
        this.weathericon = "Q";
        return this.weathericon;
      case "10d":
        this.weathericon = "R";
        return this.weathericon;
      case "10n":
        this.weathericon = "R";
        return this.weathericon;
      case "11d":
        this.weathericon = "O";
        return this.weathericon;
      case "11n":
        this.weathericon = "O";
        return this.weathericon;
      case "13d":
        this.weathericon = "W";
        return this.weathericon;
      case "13n":
        this.weathericon = "W";
        return this.weathericon;
      case "50d":
        this.weathericon = "M";
        return this.weathericon;
      case "50n":
        this.weathericon = "M";
        return this.weathericon;
    }
    // console.log(this.weathericon);
  }

  convertDate(timestamp) {
    // Convert the passed timestamp to milliseconds
    let d = new Date(timestamp * 1000);
    let yyyy = d.getFullYear();
    // Months are zero based. Add leading 0.
    let mm = ('0' + (d.getMonth() + 1)).slice(-2);
    // Add leading 0.
    let dd = ('0' + d.getDate()).slice(-2);
    // ie: 2013-02-18
    let time = yyyy + '-' + mm + '-' + dd;

    return time;
  }
}
