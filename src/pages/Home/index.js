import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom';
export default function Home() {
   return (
      <div className='container'>
         <h3>Gerenciar projetos de maneira fácil e rápida!</h3>

         <Link to="/new-project" className='btnCriarProjeto'>
            Criar projeto
         </Link>
      </div>
   );
}