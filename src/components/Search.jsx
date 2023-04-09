import { usercontext } from "../App";
import { useContext, useRef } from "react";

function Search() {
  let inpref = useRef();
  let context = useContext(usercontext);
  function handleChange() {
    let filterdata = context.laps.filter((item) => {
      console.log(context.laps);
    });
  }

  return (
    <>
      <input
        ref={inpref}
        onChange={handleChange}
        type="search"
        placeholder="Lap no"
      />
    </>
  );
}

export default Search;
