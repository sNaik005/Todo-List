import './App.css';
import Header from './MyComponents/Header';

import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {

  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[]
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  
  const onDelete = (todo)=>{
    console.log("i'm onDelete of the todo", todo)
    //deleting this way in react doesnt work
    // let index = todos.indexOf(todo);
    //todo.splice(index)

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  } 

  const addTodo =(title, desc) =>{
    console.log("add this todo", title, desc)
    let sno;
    if(todos.length == 0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno +1
    }
      
    const mytodo={
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, mytodo]);
    console.log(mytodo)    
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  return (
    <>
    <Router>
      <Header title ="My Todos List" searchBar = {true}/>
      <Routes>
        <Route  path='/' element = {
          <>
              <AddTodo addTodo= {addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
          </>  
        }>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
      </Routes>
      
      
      <Footer/>
      </Router>
    </>
  );
}

export default App;
