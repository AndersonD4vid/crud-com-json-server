import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Card({ id, name, orcamento, categoria, handleDeletar }) {
   const deletar = (e) => {
      e.preventDefault();
      handleDeletar(id);
   }

   return (
      <div className='card'>
         <p>Ordem: <span style={{ fontSize: 25 }}>{id}</span></p>
         <p>Nome do projeto: <br /> <span>{name}</span></p>
         <p>Orçamento: <br /> <span>{orcamento}</span></p>
         <p>Categoria: <br /> <span>{categoria}</span></p>

         <div className='botoes'>
            <Link to={`/project/${id}`} style={{ color: 'blue' }}>Editar</Link>
            <button onClick={deletar} style={{ color: 'red' }}>Deletar</button>
         </div>
      </div>

   );
}