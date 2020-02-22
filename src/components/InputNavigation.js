import React, { useState } from 'react';
import './InputNavigation.css';
import AddressAutoComplete from './AddressAutocomplete';
import { connect } from 'react-redux';
import { fetchRoutes, getCordinator } from '../actions';
import Datetime from './Datetime';
import moment from 'moment';

function InputNavigation(prop) {
  const dateNow = moment().format('YYYY-MM-DD');
  const timeNow = moment().format('kk:mm:ss');
  const [toAddress, setToAddress] = useState();
  const [fromAddress, setFromAddress] = useState();
  const [date, setDate] = useState(dateNow);
  const [time, setTime] = useState(timeNow);
  const [inputError, setInputError] = useState(false);

  const onClickAddress = () => {
    setInputError();
    if (toAddress && fromAddress && time && date) {
      const route = {
        from: fromAddress,
        to: toAddress,
        date: date,
        time: time
      };
      prop.fetchRoutes(route);
    } else {
      setInputError('Please add the address! ');
    }
  };

  //set address from "from" input
  const fromAddressInput = (data) => {
    setFromAddress(data.geometry.coordinates);
    prop.getCordinator(data);
  };

  //set address from "to" input
  const toAddressInput = (data) => {
    setToAddress(data.geometry.coordinates);
  };

  //set datetime get from comp Datetime
  const datetimeSelect = (data) => {
    const dateTime = data.date;
    //getMonth() return number 0-9, so add "0" to number 0-8
    const month =
      dateTime.getMonth() < 9
        ? '0' + (dateTime.getMonth() + 1)
        : dateTime.getMonth() + 1;

    const time = `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`;
    const date = `${dateTime.getFullYear()}-${month}-${dateTime.getDate()}`;
    setDate(date);
    setTime(time);
  };
  return (
    <form className="uk-form-horizontal uk-margin-small">
      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">
          From:
        </label>
        <AddressAutoComplete setAddress={fromAddressInput} />
      </div>
      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">
          To:
        </label>
        <AddressAutoComplete setAddress={toAddressInput} />
      </div>
      <div className="ul-margin">
        <Datetime setDatetimeInput={datetimeSelect} />
      </div>
      <div className="uk-text-danger">{inputError}</div>
      <div className="uk-margin">
        <button
          className="uk-button uk-button-default"
          type="button"
          onClick={onClickAddress}
        >
          Submit
        </button>
      </div>
      {prop.routes.type === 'LOADING' ? <div data-uk-spinner="" /> : null}
    </form>
  );
}

const mapStateToProps = (state) => ({
  routes: state.routes
});

export default connect(mapStateToProps, { fetchRoutes, getCordinator })(
  InputNavigation
);
