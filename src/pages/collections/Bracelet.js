import React, { useEffect, useState } from "react";

const Bracelet = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://mascara-jwellary-server-nahid-07.vercel.app/allproducts/bracelet`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  console.log(products);
  return (
    <div className="max-w-7xl grid grid-cols-3 mx-auto p-20">
      {products.map((pd) => (
        <div key={pd._id} className="card w-96 glass">
          <figure>
            <img src={pd.photoUrl} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{pd.title}</h2>
            <p>Price : ${pd.price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bracelet;
