import React from "react";

const AddProducts = () => {
  return (
    <div className="flex flex-col justify-center items-center p-20">
      <h1 className="text-2xl font-bold">Add a Product</h1>
      <form action="">
        <div className="">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            id="title"
            className="border-gray-300 border-2 focus:outline-blue-400 w-80 md:w-96 block mb-5 px-3 py-2 rounded"
            type="text"
            placeholder="Enter product title"
          />
          <label htmlFor="file">Upload Image</label>
          <input
            name="image"
            className="border-gray-300 border-2 focus:outline-blue-400 w-80 md:w-96 block mb-5 px-3 py-2 rounded"
            type="file"
            accept="image"
          />
        </div>
        <div className="">
          <select
            className="bg-gray-100 w-80 md:w-96 py-2 rounded"
            name="category"
          >
            <option value="bridal">Bridal Collections</option>
            <option value="valentine">Valentine collections</option>
          </select>
        </div>
        <div className="mt-5">
          <label htmlFor="price">Enter price</label>
          <input
            name="price"
            className="border-gray-300 border-2 focus:outline-blue-400 w-80 md:w-96 block mb-5 px-3 py-2 rounded"
            type="text"
            placeholder="$100"
          />
          <div className="flex flex-col">
            <label htmlFor="desc">Description</label>
            <textarea
              name="description"
              id="desc"
              rows="3"
              className="px-3 py-2 md:w-96 w-80 border-gray-300 border-2 focus:outline-blue-400"
              placeholder="Write short description"
            ></textarea>
          </div>
        </div>
        <div>
          <button className="w-80 md:w-96 bg-blue-400 mt-5 py-2 rounded text-white">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
