import React, { useState, useEffect } from 'react';
import './styles.css';
import { useParams } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import FormularioCriarProjeto from '../../components/projectForm';
import Messagem from '../../components/Messagem';


export default function Editar() {
   const { id } = useParams();
   //const history = useNavigate();

   const [project, setProject] = useState([]);
   const [showProject, setShowProject] = useState(false);
   const [message, setMessage] = useState();
   const [type, setType] = useState();

   useEffect(() => {
      setTimeout(() => {
         fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json'
            },
         })
            .then(resp => resp.json())
            .then((data) => {
               setProject(data);
            })
            .catch(error => console.log());
      }, 500);
   }, [id]);

   function editPost(project) {
      // orcamento validation
      if (project.orcamento < project.custo) {
         setMessage('O orçamento não pode ser menor que o custo do projeto!');
         setType('erro');
         return false;
      }

      fetch(`http://localhost:5000/projects/${project.id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(project),
      })
         .then(resp => resp.json())
         .then((data) => {
            setProject(data);
            setShowProject(false);
            setMessage('Projeto atualizado!');
            setType('sucesso');
            //history('/projects');

         })
         .catch(error => console.log(error));


   }

   function toggleProject() {
      setShowProject(!showProject);
   }



   return (
      <div className='containerEditarProjetos'>

         {project.name ?
            (
               <>
                  <h1>Projeto: {project.name}</h1>
                  {message && <Messagem type={type} msg={message} />}

                  <div className='botoes'>
                     <button onClick={toggleProject} style={{ color: 'blue' }}>{!showProject ? 'Editar projeto' : 'Fechar'}</button>
                  </div>

                  {!showProject ?
                     (
                        <div></div>
                     )
                     :
                     (
                        <FormularioCriarProjeto handleSubmit={editPost} btnText="Salvar" projectData={project} />
                     )
                  }
               </>
            )
            :
            (<Loading />)
         }
      </div>
   );
}