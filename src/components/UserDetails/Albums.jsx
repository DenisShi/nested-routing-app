import { useSelector , useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {selectAlbums} from '../../reducers/reducer'
import { fetchAlbums } from '../../reducers/albumsSlice'
import {  useParams } from "react-router-dom";
import styles from './styles.module.css'

function Albums() {
   const dispatch = useDispatch()
   const albums = useSelector(selectAlbums)
   const { id } = useParams()

   useEffect(() => {
      dispatch(fetchAlbums());
    }, [dispatch, id]);

   const userAlbums = albums.filter((item) => item.userId === Number(id))
   
   return (
      <>
      <div className={styles.container}>
      <h2>Albums</h2>
      {userAlbums.map((item) => {
         return (
            <div key={item.id} className={styles.item}>
         <p className={styles.title}>{item.title}</p>
      </div>
         )
      })}
      </div>
      </>
   )
}

export default Albums