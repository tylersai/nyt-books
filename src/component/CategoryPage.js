import React, {useState, useEffect} from "react";
import "./CategoryPage.css";
import Axios from "axios";
import { appendApiKey, colors } from "../utils";
import Genre from "./Genre";

const CategoryPage = ({match}) => {

  const [genres, setGenres] = useState([]);

  const fetchGenres = async () => {
    const link = appendApiKey("/lists/names.json");
    try {
      [].slice()
      const res = await Axios.get(link);
      const genArr = res.data.results;
      if(genArr && genArr.length > 0){
        setGenres(genArr.slice(genArr.length-1-20, genArr.length-1));
      }
    } catch (error) {
      console.log(error);
      setGenres([]);
    }
  };

  useEffect(() => {
    //fetchGenres();
  }, []);

  return (
    <div className="CategoryPage">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mt-3 mb-5">New York Times Best Sellers</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h3 className="text-left">Category Page {match.params.id}</h3>
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
};

export default CategoryPage;