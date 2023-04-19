import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { selectUsers } from "../../reducers/reducer";
import { fetchUsers } from "../../reducers/usersSlice";
import Navigation from "../Navigation";

function User() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const users = useSelector(selectUsers);
  const currentUser = users.find((user) => user.id === Number(id));

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (!currentUser) {
    return <h2>User not found.</h2>;
  }

  return (
    <>
      <Navigation />

      <ul className={styles.container}>
        <h2>{currentUser.name}</h2>

        <li className={styles.user}>
          <FontAwesomeIcon icon={faEnvelope} color={"#2296f3"} />
          <div className={styles.info}>
            <p>{currentUser.email}</p>
            <p className={styles.sub}>Email</p>
          </div>
        </li>

        <li className={styles.user}>
          <FontAwesomeIcon icon={faPhone} color={"#2296f3"} />
          <div className={styles.info}>
            <p>{currentUser.phone}</p>
            <p className={styles.sub}>Mobile</p>
          </div>
        </li>

        <li className={styles.user}>
          <FontAwesomeIcon icon={faLocationDot} color={"#2296f3"} />
          <div className={styles.info}>
            <p>{currentUser.address.street}</p>
            <p>
              {currentUser.address.city}, {currentUser.address.suite}
            </p>
            <p className={styles.sub}>Work</p>
          </div>
        </li>

        <li className={styles.user}>
          <FontAwesomeIcon icon={faUser} color={"#2296f3"} />
          <div className={styles.info}>
            <p>{currentUser.website}</p>
            <p className={styles.sub}>Social Channels</p>
          </div>
        </li>

        <li className={styles.user}>
          <FontAwesomeIcon icon={faBuilding} color={"#2296f3"} />
          <div className={styles.info}>
            <p className={styles.company}>{currentUser.company.name}</p>
            <p className={styles.company}>{currentUser.company.bs}</p>
            <p className={styles.sub}>Segments</p>
          </div>
        </li>
      </ul>
    </>
  );
}

export default User;
