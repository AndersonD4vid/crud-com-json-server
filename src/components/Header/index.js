import React from 'react';
import { NavLink, } from 'react-router-dom';

import './styles.css';

export default function Header() {
   return (
      <header className='header'>
         <NavLink
            to="/"
            style={({ isActive }) =>
               isActive
                  ? {
                     color: '#fff',
                     background: '#7600dc',
                     paddingLeft: 20,
                     paddingRight: 20,
                     paddingTop: 10,
                     paddingBottom: 10,
                     borderRadius: 30,
                  }
                  : { color: '#ffff', background: 'transparent' }
            }
         >
            Home
         </NavLink>

         <NavLink
            to="/new-project"
            style={({ isActive }) =>
               isActive
                  ? {
                     color: '#fff',
                     background: '#7600dc',
                     paddingLeft: 20,
                     paddingRight: 20,
                     paddingTop: 10,
                     paddingBottom: 10,
                     borderRadius: 30,
                  }
                  : { color: '#fff', background: 'transparent' }
            }
         >
            New Project
         </NavLink>

      </header>
   );
}