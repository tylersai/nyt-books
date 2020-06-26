import React from "react";
import "./Genre.css";

const Genre = ({genre, bgColor}) => {

  return (
    <div style={{backgroundColor : bgColor}} className="Genre d-inline-flex m-3 rounded justify-content-center align-items-center p-3">
      <h5 className="text-dark">{genre.display_name}</h5>
    </div>
  )
};

export default Genre;