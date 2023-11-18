import { useEffect, useState } from "react";
import Form from "./components/Form";

function App() {

  const [count, setCount] = useState(0)
  const [multiplo, setMultiplo] = useState(0)

  const [user, setUser] = useState('')

  function incrementar() {
    setCount(count + 1);
  }
  function decrementar() {
    setCount(count - 1);
  }

  async function buscarUsuarios() {
    try {
      let req = await fetch('http://localhost:3002/user')
      let res = await req.json()
      console.log(res);
      setUser(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    buscarUsuarios();
  }, [])

  useEffect(() => {
    console.log("O valor do contador foi modificado!");
    setMultiplo(count * 2)


  }, [count])



  return (
    <>

      {/* <button onClick={incrementar}>Incrementar</button>
      <p>{count}</p>
      <button onClick={decrementar}>Decrementar</button>

      <p>Multiplo: </p>
      <p>{multiplo}</p>

      <p>{user.name}</p> */}

      {/* <button onClick={() => setCount(count + 1)}>Renderizar</button>
      <p>{count}</p> */}
      {/* <p>{user.name}</p> */}

      <Form/>
    </>
  );
}

export default App;
