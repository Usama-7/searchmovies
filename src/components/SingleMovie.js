import React from "react";
import { useParams } from "react-router-dom";
import MoviesData from "./MoviesData";
import { Link } from "react-router-dom";

const SingleMovie = () => {
  let { id } = useParams();
  let mData = MoviesData.find((x) => x.id == id);

  return (
    <>
      <din className="container">
        <Link to="/movieslist">
          <button type="button" className="btn btn-danger m-3">
            Back
          </button>
        </Link>
      </din>

      <div className="container">
        {/* product */}
        <div className="product-content product-wrap clearfix product-deatil">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12">
              <div className="product-image">
                <div id="myCarousel-2" className="carousel slide">
                  <ol className="carousel-indicators">
                    
                  </ol>
                  <div className="carousel-inner">
                    {/* Slide 3 */}
                    <div className="item">
                      <img
                        src={`/${mData.image}`}
                        height={400}
                        width={300}
                        className="img-responsive"
                        alt
                      />
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
              <h2 className="name">{mData.mname}</h2>
              <hr />
              <h3 className="price-container">Rating: {mData.rating}</h3>
              <br />
              <p>{mData.discription}</p>

              <hr />

              <h3>Director: {mData.director}</h3>

              <p>Cast: {mData.cast} </p>

              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <a href={mData.link} className="btn btn-danger btn-lg">
                    Watch on Netflix
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end product */}
      </div>
    </>
  );
};

export default SingleMovie;
