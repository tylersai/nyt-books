import React from 'react';
import './BookPage.css';
import Title from './Title';

const BookPage = ({ match }) => {
  return (
    <div className="BookPage">
      <Title />
      <h3>ISBN : {match.params.isbn13}</h3>
    </div>
  );
};

export default BookPage;