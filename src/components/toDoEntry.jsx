import { useState, useContext } from "react"

import AppContext from "../context/context";


const ToDoEntry = () => {
    const [inputText, setInputText] = useState("")
    // const [toDoList, setToDoList] = useState([])
    const { toDoList, setToDoList} = useContext(AppContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setToDoList([...toDoList, inputText])
        console.log("to do lis",toDoList)
    }

    const handleOnChange =(e) => {
        setInputText(e.target.value)
        console.log("input text: ",inputText)
    }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="inputText"
          id="inputText"
          onChange={handleOnChange}
        ></input>
        <label htmlFor="inputText">Task</label>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default ToDoEntry;
