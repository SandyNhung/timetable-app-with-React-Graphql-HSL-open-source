import React, { useState } from 'react';
import './InputNavigation.css';
import AddressAutoComplete from './AddressAutocomplete';
import { connect } from 'react-redux';
import { fetchRoutes } from '../actions';

function InputNavigation(prop) {
  const [toAddress, setToAddress] = useState();
  const [fromAddress, setFromAddress] = useState();
  const [inputError, setInputError] = useState(false);

  const onClickAddress = () => {
    setInputError();
    if (toAddress && fromAddress) {
      const route = {
        from: fromAddress.coordinates,
        to: toAddress.coordinates
      };
      prop.fetchRoutes(route);
    } else {
      setInputError('Please add the address! ');
    }
  };
  const toAddressInput = (data) => {
    setToAddress(data);
  };
  const fromAddressInput = (data) => {
    setFromAddress(data);
  };
  return (
    <form className="uk-form-horizontal uk-margin-large">
      <div className="uk-margin">
        <div className="uk-inline">
          <label className="uk-form-label" htmlFor="form-horizontal-text">
            From:
          </label>
          <AddressAutoComplete setAddress={fromAddressInput} />
        </div>
      </div>
      <div className="uk-margin">
        <div className="uk-inline">
          <label className="uk-form-label" htmlFor="form-horizontal-text">
            To:
          </label>
          <AddressAutoComplete setAddress={toAddressInput} />
        </div>
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
    </form>
  );
}

const mapStateToProps = (state) => ({
  routes: state.routes
});

export default connect(mapStateToProps, { fetchRoutes })(InputNavigation);
