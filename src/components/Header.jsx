import { useContext, useEffect } from "react";
import { usercontext } from "../App";
function Header() {
  let context = useContext(usercontext);
  let { hours, secs, mins, milsecs } = context;

  useEffect(() => {
    document.title = `Stopwatch - ${hours}.${mins}.${secs}`;
  }, [hours, secs, mins]);
  return (
    <header>
      <h1>Stopwatch⏱</h1>
      <p className="time">
        <span className="hours">{hours}</span>.
        <span className="minutes">{mins}</span>.
        <span className="seconds">{secs}</span>
        {/* <span className="milsec s">{milsecs}</span> */}
        <span className="s">s</span>
      </p>
    </header>
  );
}

export default Header;
