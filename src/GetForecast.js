import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import CurrentWeather from './CurrentWeather';
import SpinnerLoader from './SpinnerLoader';

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
    $.ajax({
      url: 'https://simple-weather.p.mashape.com/weatherdata?lat=' + this.state.lat + '&lng=' + this.state.long,
      dataType: 'json',
      cache: false,
      success: function(response) {
        this.setState({
          temp: response.query.results.channel.item.condition.temp,
          text: response.query.results.channel.item.condition.text,
          code: response.query.results.channel.item.condition.code,
          location: response.query.results.channel.location.city,
          forecast: response.query.results.channel.item.forecast,
          loaded: true
        });
        //console.log(response.query.results.channel.item);
      }.bind(this),
      error: function(err) {
        console.log(err);
      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "GyLBaydS0xmshFix6lsYHaycbjEvp1pcBn1jsnf6pEp8sdErUk");
      }
    });
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
      alert("Geolocation failed. Please use https or enable location in your browser");
    }
  }

  componentDidMount() {
    this._getLocation();
  }

  render() {
    const hasLoaded = this.state.loaded;
    return (
      <div>
        {(hasLoaded) ? <CurrentWeather {...this.state} /> : <SpinnerLoader />}
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
