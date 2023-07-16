import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MoviesData from "./MoviesData";

const List = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Product list data
  const productList = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 5' },
    { id: 5, name: 'Product 6' },
    { id: 6, name: 'Product 7' },
    // ... more products
  ];

  // Function to handle search input change
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Filter the product list based on the search term
    const filtered = MoviesData.filter((product) =>
      product.mname.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };




  return (
    <>
      <div className="container bootstrap snipets">
        <h2 className="text-center text-muted m-4">Movies List</h2>
        <div className="row flow-offset-1">

       
        <input type='text' className="form-control mb-5" value={searchTerm} onChange={handleSearch} aria-describedby="emailHelp" placeholder="Search Movie" />

      
      {filteredProducts.length > 0
        ? filteredProducts.map((x) =>
        
        
        
        <>
              <div className="col-xs-6 col-md-4">
                <div className="product tumbnail thumbnail-3">
                  <Link to={`/movie/${x.id}`}>
                    <img width={300} height={500} src={x.image} alt />
                  </Link>
                  <div className="caption">
                    <h6>
                      <Link
                        to={`/movie/${x.id}`}
                        style={{
                          textDecoration: "none",
                          fontSize: "20px",
                          color: "Black",
                        }}
                      >
                        {x.mname}
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </>
        
        
        
        
        
        )
        :


          MoviesData.map((x) => (
            <>
              <div className="col-xs-6 col-md-4">
                <div className="product tumbnail thumbnail-3">
                  <Link to={`/movie/${x.id}`}>
                    <img width={300} height={500} src={x.image} alt />
                  </Link>
                  <div className="caption">
                    <h6>
                      <Link
                        to={`/movie/${x.id}`}
                        style={{
                          textDecoration: "none",
                          fontSize: "20px",
                          color: "Black",
                        }}
                      >
                        {x.mname}
                      </Link>
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

export default List;
