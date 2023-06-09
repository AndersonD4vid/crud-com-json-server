import React from 'react';

import '../../global.css';

export default function Select({ text, name, options, handleOnChange, value }) {
   return (
      <div className='boxInput'>
         <label className='label' htmlFor={name}>{text}:</label>
         <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
            <option>Selecione uma opção</option>
            {options.map((option) => (
               <option value={option.id} key={option.id}>{option.name}</option>
            ))}
         </select>
      </div>
   );
}