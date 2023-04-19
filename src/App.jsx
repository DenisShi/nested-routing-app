import Users from "./components/Users";
import User from './components/UserDetails'
import Albums from './components/UserDetails/Albums'
import Todos from './components/UserDetails/Todos'
import Posts from './components/UserDetails/Posts'

import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
<>
<h1>Users</h1>
<Link to="/"><button className="homeBtn">Home</button></Link>
<Routes>
        <Route exact path="/" element={<Users />} /> 
        <Route path="/:id/*" element={<User />}>
          <Route path="albums" element={<Albums />} />
          <Route path="todos" element={<Todos />} />
          <Route path="posts" element={<Posts />} />
        </Route>
      </Routes>
</>
  );
}

export default App;
