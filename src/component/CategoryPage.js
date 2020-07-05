import React, {useState, useEffect} from "react";
import "./CategoryPage.css";
import Axios from "axios";
import { appendApiKey } from "../utils";
import Book from "./Book";
import Loader from "./Loader";
import NoData from "./NoData";
import BreadCrumb from "./BreadCrumb";
import Title from "./Title";

const CategoryPage = ({match}) => {

  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [catTitle, setCatTitle] = useState("");

  const fetchBooks = async (id) => {
    setIsLoading(true);
    const link = appendApiKey(`/lists/current/${id}.json`);
    try {
      const res = await Axios.get(link);
      if(res.data.results && res.data.results.books && res.data.results.books.length > 0){
        const bookArr = res.data.results.books;
        setIsLoading(false);
        setCatTitle(res.data.results.display_name);
        setBooks(bookArr);
      } else {
        setIsLoading(false);
        setCatTitle("");
        setBooks([]);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
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
        <Title />
        {
          isLoading ? <Loader /> :
          books && books.length>0 ? (
            <div className="row justify-content-center">
              <div className="col-md-10">
                <BreadCrumb catTitle={catTitle} />
                <div className="d-flex justify-content-center flex-wrap">
                  {
                    books.map(book => <Book key={book.primary_isbn13} book={book}/>)
                  }
                </div>
              </div>
            </div>
          ) : <NoData />
        }
        
      </div>
    </div>
  )
};

export default CategoryPage;