import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { selectPosts } from "../../reducers/reducer";
import { fetchPosts } from "../../reducers/postsSlice";
import Navigation from "../Navigation";
import styles from "./styles.module.css";

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch, id]);

  const userPosts = posts.filter((item) => item.userId === Number(id));

  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <h2>Posts</h2>
        {userPosts.map((item) => {
          return (
            <div key={item.id} className={styles.itemPost}>
              <h4 className={styles.title}>{item.title}</h4>
              <p className={styles.title}>{item.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Posts;
