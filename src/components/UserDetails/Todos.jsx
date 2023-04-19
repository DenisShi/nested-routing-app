import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectTodos } from "../../reducers/reducer";
import { fetchTodos } from "../../reducers/todoSlice";
import { useParams } from "react-router-dom";
import Navigation from "../Navigation";
import styles from "./styles.module.css";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const { id } = useParams();
  const idNum = Number(id);

  const userTodos = todos.filter((item) => item.userId === idNum);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch, id]);

  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <h2>Todos</h2>
        {userTodos.map((item) => {
          return (
            <div key={item.id} className={styles.item}>
              <div className={styles.circle}></div>
              <div
                className={
                  item.completed
                    ? `${styles.tick} ${styles.complete}`
                    : `${styles.tick}`
                }
              ></div>
              <p
                className={
                  item.completed
                    ? `${styles.title} ${styles.titleComplete}`
                    : `${styles.title}`
                }
              >
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Todos;
