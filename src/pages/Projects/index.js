import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link, useLocation } from 'react-router-dom';
import Messagem from '../../components/Messagem';
import Card from '../../components/Card';
import Loading from '../../components/Loading';

export default function Projects() {
   const [projects, setProjects] = useState([]);
   const [loading, setLoading] = useState(false);
   const [projectMesagens, setProjectMensagens] = useState('');

   const location = useLocation();
   let message = '';

   if (location.state) {
      message = location.state.message;
   }

   useEffect(() => {
      // simular um delay de servidor
      setTimeout(() => {
         fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
            },
         })
            .then(resp => resp.json())
            .then(data => {
               setProjects(data);
               setLoading(true);
            })
            .catch(error => console.loog(error))
      }, 1000);
   }, [])

   function deletarProjeto(id) {
      fetch(`http://localhost:5000/projects/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json'
         },
      })
         .then(resp => resp.json())
         .then(() => {
            setProjects(projects.filter((project) => project.id !== id));
            setProjectMensagens('Projeto deletado com sucesso!');
         })
         .catch(error => console.log(error));
   }

   return (
      <div className='containerProjetos'>
         <div className='headerProjetos'>
            <h1>Meus projetos</h1>
            <Link to="/new-project">Novo projeto</Link>
         </div>
         {message && <Messagem msg={message} type="sucesso" />}
         {projectMesagens && <Messagem msg={projectMesagens} type="sucesso" />}
         <div className='containerGeral'>
            {projects.length > 0 &&
               projects.map((project) =>
                  <Card
                     id={project.id}
                     key={project.id}
                     name={project.name}
                     orcamento={project.orcamento}
                     categoria={project.categoria.name}
                     handleDeletar={deletarProjeto}
                  />
               )}
            {!loading && <Loading />}
            {loading && projects.length === 0 && (
               <h3>Não há projetos cadastrados!</h3>
            )

            }
         </div>
      </div>
   );
}