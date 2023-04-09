import Header from "./components/Header";
import Options from "./components/Options";
import Search from "./components/Search";
import { useState, createContext } from "react";
import Laps from "./components/Laps";

export let usercontext = createContext();
function App() {
  let [hours, sethours] = useState("00");
  let [mins, setmins] = useState("00");
  let [secs, setsecs] = useState("00");
  let [milsecs, setmilsecs] = useState("00");
  let [laps, setlaps] = useState([]);

  return (
    <div className="App">
      <usercontext.Provider
        value={{
          hours,
          mins,
          secs,
          milsecs,
          laps,
          sethours,
          setmins,
          setsecs,
          setmilsecs,
          setlaps,
        }}
      >
        <Header />
        <Options />
        {/* <Search /> */}
        <Laps />
      </usercontext.Provider>
    </div>
  );
}

export default App;
