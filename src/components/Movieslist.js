import React from "react";

import MoviesData from "./MoviesData";
import { Link } from "react-router-dom";

const MoviesList = () => {
  return (
    <>

{/* <Link to="/movie">test1111111</Link> */}


      <div className="container bootstrap snipets">
        <h1 className="text-center text-muted">Product catalog</h1>
        <div className="row flow-offset-1">
        {MoviesData.map((x) =>  (
                <>
          <div className="col-xs-6 col-md-4">
            <div className="product tumbnail thumbnail-3">
            
              <a href="#">
                <img width={300} height={500}
                  src={x.image}
                  alt
                />
              </a>
              <div className="caption">
                <h6>
                  <a href="#">{x.mname}</a>
                </h6>
               
              </div>
              
            </div>
           
          </div>
          </>
              ))}
        </div>
      </div>
     
    </>
  );
};

export default MoviesList;
