import React, { useState, useEffect } from 'react';
import styles from './message.module.css';

export default function Messagem({ type, msg }) {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      if (!msg) {
         setVisible(false);
         return;
      }

      setVisible(true);

      const timer = setTimeout(() => {
         setVisible(false);
      }, 3000)

      return () => clearTimeout(timer);

   }, [msg])

   return (
      <>
         {visible && (
            <div className={`${styles.messagem} ${styles[type]}`}>
               <span>{msg}</span>
            </div>
         )}
      </>
   )
}