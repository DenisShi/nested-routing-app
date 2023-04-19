import {  Link, useParams } from "react-router-dom";
import styles from './navigation.module.css'

function Navigation() {
   const { id } = useParams()
   
   return (
      <>
      <nav>
         <ul className={styles.navigation}>
            <li><Link to={`/${id}`}>User</Link></li>
            <li><Link to={`/${id}/albums`}>Albums</Link></li>
            <li><Link to={`/${id}/todos`}>Todos</Link></li>
            <li><Link to={`/${id}/posts`}>Posts</Link></li>
         </ul>
      </nav>
      </>
   )
}

export default Navigation