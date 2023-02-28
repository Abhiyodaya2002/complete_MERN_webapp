
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Errorpage from './components/Errorpage';
import Logout from "./components/Logout"
import {Routes,Route} from "react-router-dom";
import { createContext, useReducer } from 'react';

import { initialstate, reducer } from './reducer/UseReducer';
export const UserContext=createContext();
function App() {
 const [state,dispatch]=useReducer(reducer ,initialstate);
  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
    <Navbar></Navbar>
    <Routes>

<Route path="/" element={<Home></Home>}>
</Route>

<Route path='/contact' element={<Contact></Contact>}>

</Route>
<Route path='/about' element={<About></About>}>
</Route>
<Route path='/signup' element={<Signup></Signup>}>
</Route>
<Route path="/Login"  element={<Login></Login>}>
</Route>
<Route path="/logout"  element={<Logout></Logout>}>
</Route>
<Route path='*' element={<Errorpage></Errorpage>}></Route>
</Routes>
</UserContext.Provider>
    </>
  );
}


export default App;
