import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormularioCriarProjeto from '../../components/projectForm';

import './styles.css';

export default function NewProject() {
   const history = useNavigate();

   function createPost(project) {
      project.custo = 0;
      project.services = [];

      fetch('http://localhost:5000/projects', {
         method: 'POST',
         headers: {
            'Content-type': 'application/json',
         },
         body: JSON.stringify(project),
      })
         .then((resp) => resp.json())
         .then((data) => {
            history('/projects', { state: { message: 'Projeto criado com sucesso!' } });
         })
         .catch((error) => console.log(error))

   }



   return (
      <div className='containerNewProject'>
         <h1>Criar projeto</h1>
         <p>Crie seu projeto para depois adicionar os serviços</p>

         <FormularioCriarProjeto handleSubmit={createPost} btnText="Criar projeto" />
      </div>
   );
}