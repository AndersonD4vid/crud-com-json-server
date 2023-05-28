import React from 'react';

export default function SubmitButton({ text }) {
   return (
      <div>
         <button className='botaoCriar'>
            {text}
         </button>
      </div>
   );
}