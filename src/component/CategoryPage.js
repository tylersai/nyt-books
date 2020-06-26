import React, {useState, useEffect} from "react";
import "./CategoryPage.css";
import Axios from "axios";
import { appendApiKey } from "../utils";
import Book from "./Book";

const CategoryPage = ({match}) => {

  const [books, setBooks] = useState([]);
  const [catTitle, setCatTitle] = useState("");

  const fetchBooks = async (id) => {
    const link = appendApiKey(`/lists/current/${id}.json`);
    try {
      const res = await Axios.get(link);
      if(res.data.results && res.data.results.books && res.data.results.books.length > 0){
        const bookArr = res.data.results.books;
        setCatTitle(res.data.results.display_name);
        setBooks(bookArr);
      } else {
        setCatTitle("");
        setBooks([]);
      }
    } catch (error) {
      console.log(error);
      setCatTitle("");
      setBooks([]);
    }
  };

  useEffect(() => {
    fetchBooks(match.params.id);
  }, [match.params.id]);

  return (
    <div className="CategoryPage">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mt-3 mb-5">New York Times Best Sellers</h2>
          </div>
        </div>
        {
          catTitle && (
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h3 className="text-left">{catTitle}</h3>
                <hr />
                {
                  books.map(book => <Book key={book.rank} book={book}/>)
                }
              </div>
            </div>
          )
        }
        
      </div>
    </div>
  )
};

export default CategoryPage;