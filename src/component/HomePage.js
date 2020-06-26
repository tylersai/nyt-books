import React, {useState, useEffect} from "react";
import "./HomePage.css";
import Axios from "axios";
import { appendApiKey, colors } from "../utils";
import Genre from "./Genre";

const HomePage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [genres, setGenres] = useState([]);

  const fetchGenres = async () => {
    setIsLoading(true);
    const link = appendApiKey("/lists/names.json");
    try {
      const res = await Axios.get(link);
      const genArr = res.data.results;
      if(genArr && genArr.length > 0){
        setIsLoading(false);
        setGenres(genArr.slice(genArr.length-1-20, genArr.length-1));
      } else {
        setIsLoading(false);
        setGenres([]);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setGenres([]);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div className="HomePage">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mt-3 mb-5 text-dark">New York Times Best Sellers</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h3 className="text-left">Browse Category</h3>
            <hr />
            {
              isLoading ? ( <div class="loader mt-5 mx-auto"></div> ): 
              genres && genres.length > 0 ? genres.map(genre => <Genre 
                  key={genre.list_name_encoded} 
                  genre={genre}
                  bgColor={colors[Math.floor(Math.random() * colors.length)]}
                  />) : <h4 className="mt-5">NO DATA</h4>
              
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomePage;