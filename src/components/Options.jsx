import { useState, useContext, useRef } from "react";
import { usercontext } from "../App";

function Options() {
  let context = useContext(usercontext);
  let stopref = useRef();
  let lapref = useRef();
  let startref = useRef();
  let divref = useRef();
  let [playbtn, setplaybtn] = useState(true);
  let {
    sethours,
    setmins,
    setsecs,
    setmilsecs,
    laps,
    setlaps,
    hours,
    secs,
    milsecs,
    mins,
  } = context;

  function handleStart() {
    divref.current.classList.add("active");
    startref.current.classList.add("none");
    lapref.current.classList.remove("none");
    stopref.current.classList.remove("none");
    setlaps([]);
    setplaybtn(!playbtn);
    let startdate = new Date();
    let timer = setInterval(() => {
      parsedate(startdate);
    }, 1000);
    localStorage.setItem("timer", timer);
  }

  function handlestop() {
    lapref.current.classList.add("none");
    divref.current.classList.remove("active");
    startref.current.classList.remove("none");
    stopref.current.classList.add("none");
    clearInterval(localStorage.getItem("timer"));
    localStorage.removeItem("timer");
    setplaybtn(true);
    sethours("00");
    setmins("00");
    setsecs("00");
    setmilsecs("00");
  }

  //Stopwatch Logic
  function parsedate(startdate) {
    let timeInMilliseconds = new Date() - startdate;
    // Adding 0 if it is a single digit number
    let milsecs = Math.floor(timeInMilliseconds / 10).toString();

    let secs =
      Math.floor(((timeInMilliseconds % 3600000) % 60000) / 1000) < 10
        ? "0" + Math.floor(((timeInMilliseconds % 3600000) % 60000) / 1000)
        : Math.floor(((timeInMilliseconds % 3600000) % 60000) / 1000);
    let mins =
      Math.floor((timeInMilliseconds % 3600000) / 60000) < 10
        ? "0" + Math.floor((timeInMilliseconds % 3600000) / 60000)
        : Math.floor((timeInMilliseconds % 3600000) / 60000);
    let hours =
      Math.floor(timeInMilliseconds / 3600000) < 10
        ? "0" + Math.floor(timeInMilliseconds / 3600000)
        : Math.floor(timeInMilliseconds / 3600000);

    // Changing states
    setmilsecs(milsecs);
    setsecs(secs);
    setmins(mins);
    sethours(hours);
  }

  function handleadd() {
    let obj = {
      id: crypto.randomUUID(),
      time: `${hours}.${mins}.${secs}`,
    };
    setlaps([...laps, obj]);
  }

  return (
    <>
      <div ref={divref} className="options u-flex">
        <button ref={startref} onClick={handleStart} disabled={!playbtn}>
          Start
        </button>
        <button
          ref={stopref}
          onClick={handlestop}
          disabled={playbtn}
          className="none"
        >
          Stop
        </button>
        <button
          ref={lapref}
          onClick={handleadd}
          disabled={playbtn}
          className="none"
        >
          Lap
        </button>
      </div>
    </>
  );
}

export default Options;
