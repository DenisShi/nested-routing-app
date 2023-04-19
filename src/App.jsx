import Users from "./components/Users";
import User from "./components/UserDetails";
import Albums from "./components/UserDetails/Albums";
import Todos from "./components/UserDetails/Todos";
import Posts from "./components/UserDetails/Posts";

import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Users</h1>
      <Link to="/">
        <button className="homeBtn">Home</button>
      </Link>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:id" element={<User />} />
        <Route exact path="/:id/albums" element={<Albums />} />
        <Route exact path="/:id/todos" element={<Todos />} />
        <Route exact path="/:id/posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
