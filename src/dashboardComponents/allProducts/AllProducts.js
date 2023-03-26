import React, { useEffect, useState } from 'react';
import Speener from '../../component/Speener';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch("https://mascara-jwellary-server-nahid-07.vercel.app/allproducts")
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setLoading(false)
        })
    },[])
    
    return (
        <>
        {
            loading ? <Speener></Speener> : <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">All products</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs">
                <thead className="dark:bg-gray-700">
                  <tr className="text-left">
                    <th className="p-3">ID</th>
                    <th className="p-3">Title</th>
                    <th className="p-3">Photo</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product._id}
                      className="border-b border-opacity-20 text-lg"
                    >
                      <td className="p-3">
                        <p>{product._id}</p>
                      </td>
                      <td className="p-3">
                        <p>{product.title}</p>
                      </td>
                      <td className="p-3">
                        <img className='w-10 h-10' src={product.photoUrl} alt="" />
                      </td>
                      <td className="p-3">
                        <p>{product.category}</p>
                      </td>
                      <td className="p-3">
                        <p>{product.price}</p>
                      </td>
                      <td className="p-3">
                        <p>
                          <button className="bg-red-800 px-3 py-1 rounded text-white">Delete</button>
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        }
    </>
    );
};

export default AllProducts;