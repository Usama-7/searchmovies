import React, { useState } from "react";
import { Link } from "react-router-dom";
import MoviesData from "./MoviesData";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Function to handle search input change
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Filter the product list based on the search term
    const filtered = MoviesData.filter((product) =>
      product.mname.toLowerCase().includes(term.toLowerCase())
    );
    if(event.target.value != ""){
    setFilteredProducts(filtered);
    }
  };

  return (
    <>
      <div className="dropdown" >
        <button
          className="btn btn-dark "
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Search
        </button>
        <ul className="dropdown-menu pb-4" aria-labelledby="dropdownMenuButton1">
          <input
            type="text"
           
            className="form-control mb-5"
            value={searchTerm}
            onChange={handleSearch}
            aria-describedby="emailHelp"
            placeholder="Search Movie"
          />
          
{ filteredProducts.map((x) =>      
        <>
              <li className="pb-1 mb-2 pt-1 " style={{backgroundColor:"lightgray"}}>
                
                <div className="row ps-2">
                   
                  <div className="col">
                  <Link to={`/movie/${x.id}`}>
                      <  img width={110} height={90} src={x.image} alt />
                    </Link>
                    <h6 className="mt-3">
                    <Link to={`/movie/${x.id}`}>{x.mname} </Link>
                    </h6>
                  </div>
                 
                </div>
              </li>
        
            </>  
        )
         }
        </ul>
      </div>
    </>
  );
};

export default Searchbar;
