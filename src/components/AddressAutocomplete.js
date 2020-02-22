import React, { useState } from 'react';
import './AddressAutocomplete.css';
import axios from 'axios';

function AddressAutocomplete(prop) {
  //list of address from autocomplete address fetch
  const [addressAutoComplete, setAddressAutoComplete] = useState(false);
  const [inputAddress, setInputAddress] = useState();

  const addressAutocomplete = async (value) => {
    if (value && value.length > 2) {
      //fetch autocomplete address
      const res = await axios.get(
        `https://api.digitransit.fi/geocoding/v1/autocomplete?text=${value}&layers=address`
      );
      res.data.features.length > 0
        ? setAddressAutoComplete(res.data)
        : setAddressAutoComplete(false);
    } else {
      setAddressAutoComplete(false);
    }
  };
  const addressRender = (value) => {
    return (
      <div className="uk-card uk-card-body uk-card-default name-list">
        <ul className="uk-nav uk-dropdown-nav">
          {value.features.map((e) => {
            return (
              <li
                key={e.properties.id}
                className="address-name"
                onClick={() => {
                  setInputAddress(e.properties.name);
                  setAddressAutoComplete(false);
                  prop.setAddress(e);
                }}
              >
                {e.properties.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  return (
    <div className="uk-form-controls">
      <input
        className="uk-input"
        id="form-horizontal-text"
        type="text"
        placeholder="Some text..."
        value={inputAddress || ''}
        onChange={(e) => {
          setInputAddress(e.target.value);
          addressAutocomplete(e.target.value);
        }}
      />
      {addressAutoComplete !== false ? addressRender(addressAutoComplete) : null}
    </div>
  );
}

export default AddressAutocomplete;
