import React from "react";
import Preview from "./Preview";

const Create = () => {
  return (
    <div>
      <input type="text" placeholder="Search Recipe..." />
      <Preview />
      <button>SAVE</button>
    </div>
  );
};

export default Create;
