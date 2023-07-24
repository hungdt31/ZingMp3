import { Home, Login, Public } from "./containers/public";
import { Routes, Route } from "react-router-dom";
// import {useSelector, useDispatch} from 'react-redux'
import path from "./ultis/path";
import { useEffect } from "react";
import * as actions from './store/actions'
import { useDispatch } from "react-redux";

function App() {
  // const {text} = useSelector(state => state.app)
  // console.log(text)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(actions.getHome())
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path={path.PUBLIC} element={<Public/>}>
          <Route path={path.HOME} element={<Home/>}/>
          <Route path={path.LOGIN} element={<Login/>}/>
          <Route path={path.STAR} element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
