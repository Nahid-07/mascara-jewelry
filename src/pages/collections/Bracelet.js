import React, { useEffect, useState } from "react";
import Speener from "../../component/Speener";

const Bracelet = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`http://localhost:5000/allproducts/bracelet`)
      .then((res) => res.json())
      .then((data) => {
          setProducts(data)});
          setLoading(false)
  }, []);
  console.log(products);
  return (
    <div className="max-w-7xl grid grid-cols-3 mx-auto p-20">
      { 
        products.map(pd => <div key={pd._id} className="card w-96 glass">
        <figure><img src={pd.photoUrl} alt="car!"/></figure>
        <div className="card-body">
          <h2 className="card-title">{pd.title}</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy now</button>
          </div>
        </div>
      </div>)
      }
    </div>
  );
};

export default Bracelet;
