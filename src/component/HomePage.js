import React, {useState, useEffect} from "react";
import "./HomePage.css";
import Axios from "axios";
import { appendApiKey, colors } from "../utils";
import Genre from "./Genre";
import Loader from "./Loader";
import NoData from "./NoData";
import Title from "./Title";

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
        setGenres(genArr.slice(genArr.length-1-24, genArr.length-1));
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

  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="HomePage">
      <div className="container-fluid">
        <Title />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h3 className="text-left">Browse Category</h3>
            <hr />
            <div className="d-flex justify-content-center flex-wrap">
              {
                isLoading ? <Loader /> : 
                genres && genres.length > 0 ? genres.map(genre => <Genre 
                    key={genre.list_name_encoded} 
                    genre={genre}
                    bgColor={getRandomColor()}
                    />) : <NoData />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomePage;