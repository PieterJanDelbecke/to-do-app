import { useState } from "react";

// import ToDoEntry from "./toDoEntry"

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDoList([...toDoList, inputText]);
    console.log("to do lis", toDoList);
  };

  const handleOnChange = (e) => {
    setInputText(e.target.value);
    console.log("input text: ", inputText);
  };

//   const handleDelete = (e) => {
//     e.prenventDefault();
//     setToDoList(toDoList.pop());
//   };

  return (
    <>
      <h1>Home Page</h1>
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
      {toDoList.map((item, index) => {
        return (
          <>
            <h3 key={index}>{item}</h3>
          </>
        );
      })}
      {/* <button onClick={handleDelete}>Delete last</button> */}
    </>
  );
};

export default Home;
