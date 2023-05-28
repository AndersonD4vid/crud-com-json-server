import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
   return (
      <div className='error'>
         <h1>Página não encontrada!</h1>
         <Link to="/">Voltar</Link>
      </div>
   );
}