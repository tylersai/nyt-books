import React from "react";
import "./Book.css";

const Book = ({book}) => {

  return (
  <div className="Book d-inline-block card m-3 shadow" 
    style={{maxWidth : "450px"}}>
    <div className="row no-gutters">
      <div className="col-4">
        <img src={book.book_image} className="card-img" alt="BookImg"/>
      </div>
      <div className="col-8">
        <div className="card-body text-left">
          <h5 className="card-title text-dark">{book.title}</h5>
          <p className="card-text">
            {book.description}
          </p>
          <p className="card-text">
            <small className="text-info">
              {book.author}
            </small>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Book;