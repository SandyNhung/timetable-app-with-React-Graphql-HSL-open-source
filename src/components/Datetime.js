import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

function DatetimeComp(prop) {
  const now = new Date();

  const [datetime, setDatetime] = useState(now);

  return (
    <div>
      <DateTimePicker
        onChange={(date) => {
          setDatetime(date);
          if (date) {
            prop.setDatetimeInput({ date });
          }
        }}
        value={datetime}
      />
    </div>
  );
}

export default DatetimeComp;
