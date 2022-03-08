import React, { useState } from 'react'
import Country from './Components/Country';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {

  let [progress, setProgress] = useState(0);
  let [valueName, setValue] = useState("");
  let [countryArr, setCountryArr] = useState([]);
  let [tempArr, setTempArr] = useState([]);

  function handleSearchChange(e) {
    let val = e.target.value;
    setValue(val);

    const res = tempArr.filter((country) => {
      return country.name.official.toLowerCase().includes(val.toLowerCase())
    })

    console.log(res);
    setCountryArr(res);
    setValue("");
  }

  return (
    <div className="App">
      <Router>
      <LoadingBar
          color='rgb(255, 199, 96)'
          height="3px"
        progress={progress}
      />
        <Navbar handleSearchChange={handleSearchChange}/>
        <Routes>
          <Route exact path='/' element={<Country setTempArr={setTempArr} countryArr={countryArr} setCountryArr={setCountryArr} setProgress={setProgress} region="home" searchedValue={valueName} key="home" />}></Route>
          <Route exact path='/africa' element={<Country setTempArr={setTempArr} countryArr={countryArr} setCountryArr={setCountryArr} setProgress={setProgress} region="africa" searchedValue={valueName} key="africa"/>}></Route>
          <Route exact path='/americas' element={<Country setTempArr={setTempArr} countryArr={countryArr} setCountryArr={setCountryArr} setProgress={setProgress} region="americas" searchedValue={valueName} key="americas" />}></Route>
          <Route exact path='/asia' element={<Country setTempArr={setTempArr} countryArr={countryArr} setCountryArr={setCountryArr} setProgress={setProgress} region="asia" searchedValue={valueName} key="asia" />} ></Route>
          <Route exact path='/europe' element={<Country setTempArr={setTempArr} countryArr={countryArr} setCountryArr={setCountryArr} setProgress={setProgress} region="europe" searchedValue={valueName} key="europe" />}></Route>
          <Route exact path='/oceania' element={<Country setTempArr={setTempArr} countryArr={countryArr} setCountryArr={setCountryArr} setProgress={setProgress} region="oceania" searchedValue={valueName} key="oceania"/>}></Route>
        </Routes>
      </Router>
    </div>
      
  );
}

export default App;
