import Users from "./components/Users";
import User from './components/User'

import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
<>
<h1>Users</h1>
<Link to="/"><button className="homeBtn">Home</button></Link>
<Routes>
<Route exact path="/" element={<Users />} /> 
<Route path="/:username" element={<User />} />
</Routes>
</>
  );
}

export default App;
