import React from "react";
import { Link } from "react-router-dom";
import "./BreadCrumb.css";

const BreadCrumb = ({catTitle}) => {
  return (
    <nav aria-label="BreadCrumb breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/browse">Book Category</Link></li>
        <li className="breadcrumb-item active" aria-current="page">{catTitle}</li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;