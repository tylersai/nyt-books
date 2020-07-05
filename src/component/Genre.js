import React from "react";
import { Link } from "react-router-dom";
import "./Genre.css";

const Genre = ({genre, bgColor}) => {

  return (
    <Link to={`/category/${genre.list_name_encoded}`}>
      <div style={{backgroundColor : bgColor}} className="Genre d-inline-flex m-1 m-md-2 m-lg-3 shadow justify-content-center align-items-center p-2 p-md-3">
        <h5 className="text-dark">{genre.display_name}</h5>
      </div>
    </Link>
  )
};

export default Genre;