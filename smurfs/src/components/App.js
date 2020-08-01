import React, { useEffect, useState } from "react";
import SmurfContext from "../contexts/SmurfContext"
import axios from "axios"
import "./App.css";
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";
import { Switch, Route } from "react-router-dom";
import SmurfDetail from "./SmurfDetail";

function App () {
  const [smurfs, setSmurfs] = useState([])

  const fetchSmurfs = () => {
    axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      setSmurfs(res.data)
    })
    .catch(err => {
      console.log(err.message);
    })
  }

  const addNewSmurf = (name, age, height) => {
    axios
    .post("http://localhost:3333/smurfs", {
      name: name,
      age: parseInt(age),
      height: `${height}cm`
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err.message);
    })
  }


  useEffect(() => {
    fetchSmurfs()
  },[smurfs])


  
    return (
      <SmurfContext.Provider value={{smurfs, addNewSmurf}}>
        <div className="App">
          <Switch>
            <Route path="/smurf/:smurfId">
              <SmurfDetail />
            </Route>
            <Route path="/">
              <SmurfForm />
              <Smurfs />
            </Route>
            
          </Switch>
        </div>
      </SmurfContext.Provider>
    );
}

export default App;
