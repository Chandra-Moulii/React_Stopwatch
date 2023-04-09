import { useContext, useRef } from "react";
import { usercontext } from "../App";

function Laps() {
  let divref = useRef();
  let context = useContext(usercontext);
  function handledelete(id) {
    let laps = context.laps.filter((lap) => {
      if (lap.id !== id) return true;
    });
    context.setlaps(laps);
  }
  let laps = context.laps.map(({ id, time }, index) => {
    return (
      <div ref={divref} key={id} className="u-flex">
        <span className="lapname">Lap {index + 1}</span>
        <span className="laptime">{time} s</span>
        <span
          onClick={() => {
            handledelete(id);
          }}
        >
          -
        </span>
      </div>
    );
  });
  return (
    <>
      {laps.length === 0 ? null : (
        <>
          {/* <h1 className="laptitle">Total Laps - {laps.length}</h1> */}
          <section className="laps">{laps}</section>
        </>
      )}
    </>
  );
}

export default Laps;
