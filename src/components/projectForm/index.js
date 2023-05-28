import React, { useEffect, useState, } from 'react';
import Input from '../Input';
import Select from '../Select';
import SubmitButton from '../submitButton';

export default function FormularioCriarProjeto({ btnText, handleSubmit, projectData }) {
   const [categorias, setCategorias] = useState([]);
   const [project, setProject] = useState(projectData || {});

   useEffect(() => {
      fetch("http://localhost:5000/categorias", {
         method: "GET",
         headers: {
            'Content-Type': 'application/json'
         }
      })
         .then((resp) => resp.json())
         .then((data) => {
            setCategorias(data);
         })
         .catch((error) => console.log(error));
   }, [])

   const submit = (e) => {
      e.preventDefault();
      handleSubmit(project);
      //console.log(project)
   }

   function handleChange(e) {
      e.preventDefault();
      setProject({ ...project, [e.target.name]: e.target.value })
   }

   function handleSelect(e) {
      setProject({
         ...project,
         categoria: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
         }
      })
   }

   return (
      <form onSubmit={submit}>
         <Input
            placeholder="Nome do projeto"
            text="Nome do projeto"
            name="name"
            maxLength={42}
            minLength={1}
            handleOnChange={handleChange}
            value={project.name ? project.name : ''}
         />

         <Input
            type='number'
            text="Orçamento total"
            name="orcamento"
            placeholder='Orçamento total do projeto'
            maxLength={100}
            minLength={1}
            handleOnChange={handleChange}
            value={project.orcamento ? project.orcamento : ''}
         />


         <Select
            name="categoria_id"
            text="Selecione uma categoria"
            options={categorias}
            handleOnChange={handleSelect}
            value={project.categoria ? project.categoria.id : ''}
         />

         <SubmitButton handleChange={submit} text={btnText} />
      </form>
   );
}