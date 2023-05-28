import React from 'react';

import '../../global.css';

export default function Input({ type, text, name, placeholder, handleOnChange, value }) {
   return (
      <div className='boxInput'>
         <label className='label' htmlFor={name}>{text}:</label>
         <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
            maxLength={40}
         />
      </div>
   );
}