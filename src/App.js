import { useEffect, useState } from "react";
import api from './services/api'

import "./global.css"

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
    .get("/users/luisdasilvahenrique")
    .then((response) => setUser(response.data))
    .catch((err) => {
      console.log("ops! ocorreu um erro" + err);
    })
  }, []);
  

  return (
    <div className="App">
      <p> <strong>Usuário</strong> : {user?.login}</p>
      <p> <strong>Biografia</strong> : {user?.bio}</p>
    </div>
  );
}

