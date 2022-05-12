import { Routes, Route} from "react-router-dom"
import { useState } from 'react'

import Home from "./components/home";
import AppContext from "./context/context";

function App() {
  const [toDoList, setToDoList] = useState([])

  return (
    <>
    <AppContext.Provider value={{toDoList, setToDoList}} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
