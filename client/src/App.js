import './App.css';
import Authorize from './component/Authorise';
import Header from "./component/Header/Header";
import  Login from "./component/Login";
import  Register from "./component/Register";
import  Todo from "./component/Todo/Todo";
import { BrowserRouter, Routes,Route } from "react-router-dom";
// import Authorize from './component/Authorise';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={<Login/>} path="/login"/>
      <Route element={<Register/>} path="/Register"/>
      <Route element={ <Authorize> <Todo/></Authorize>} path="/todo"/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
