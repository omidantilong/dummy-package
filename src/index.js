import React from "react";

const Dummy = (props) => {
  return (
    <div>
      <h1>Hello I am a dummy</h1>
      {props.children}
    </div>
  );
};
export default Dummy
export { Dummy }

/* The function must be explicitly declare before exporting
export default Dummy = () => {} will NOT work
*/