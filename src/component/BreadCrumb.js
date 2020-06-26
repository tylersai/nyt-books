import React from "react";
import { Link } from "react-router-dom";
import "./BreadCrumb.css";

const BreadCrumb = ({catTitle}) => {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><Link to="/browse">Book Category</Link></li>
        <li class="breadcrumb-item active" aria-current="page">{catTitle}</li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;