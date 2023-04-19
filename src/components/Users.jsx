import styles from "./users.module.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchUsers } from "../reducers/usersSlice";
import { selectUsers } from "../reducers/reducer";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className={styles.container}>
        {users.map((user) => {
          return (
            <Link to={`${user.id}`} key={user.id}>
              <div className={styles.item}>
                <p className={styles.username}>{user.username}</p>
                <p className={styles.name}>{user.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Users;
