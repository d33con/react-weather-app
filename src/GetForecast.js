import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import SpinnerLoader from "./SpinnerLoader";

class GetForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: props.initialLat,
      long: props.initialLong,
      temp: null,
      text: "",
      code: "",
      location: "",
      forecast: [],
      loaded: false
    };

    this._handleGeoPosition = this._handleGeoPosition.bind(this);
    this._retrieveWeather = this._retrieveWeather.bind(this);
  }

  _retrieveWeather() {
    axios
      .get("https://simple-weather.p.mashape.com/weatherdata", {
        params: {
          lat: this.state.lat,
          lng: this.state.long,
          cache: false,
          dataType: "json"
        },
        headers: {
          "X-Mashape-Authorization":
            "GyLBaydS0xmshFix6lsYHaycbjEvp1pcBn1jsnf6pEp8sdErUk"
        }
      })
      .then(response => {
        this.setState({
          temp: response.data.query.results.channel.item.condition.temp,
          text: response.data.query.results.channel.item.condition.text,
          code: response.data.query.results.channel.item.condition.code,
          location: response.data.query.results.channel.location.city,
          forecast: response.data.query.results.channel.item.forecast,
          loaded: true
        });
        console.log(response.data);
      })
      .catch(err => console.log(err));
  }

  _handleGeoPosition(coords) {
    this.setState({
      lat: coords.coords.latitude,
      long: coords.coords.longitude
    });
    this._retrieveWeather();
  }

  _getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._handleGeoPosition);
    } else {
      alert(
        "Geolocation failed. Please use https or enable location in your browser"
      );
    }
  }

  componentDidMount() {
    this._getLocation();
  }

  render() {
    const hasLoaded = this.state.loaded;
    return (
      <div>
        {hasLoaded ? <CurrentWeather {...this.state} /> : <SpinnerLoader />}
      </div>
    );
  }
}

// Prop Types
GetForecast.defaultProps = {
  initialLat: 52.636878,
  initialLong: -1.139759
};

GetForecast.propTypes = {
  initialLat: PropTypes.number.isRequired,
  initialLong: PropTypes.number.isRequired
};

export default GetForecast;
