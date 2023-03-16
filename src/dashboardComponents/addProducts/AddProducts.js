import React from "react";
import { toast } from "react-hot-toast";


const AddProducts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.files[0];
    const category = e.target.category.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const formData = new FormData();
    formData.append("image", image);
    const url =
      "https://api.imgbb.com/1/upload?key=afef7a18a343b614ef922e54a0d39132";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const photoUrl = data.data.display_url;
        fetch("http://localhost:5000/add-product", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            title,
            category,
            price,
            description,
            photoUrl,
          }),
        }).then(()=>{
            toast.success("successfully added to the database");  
        })
      });
  };
  return (
    <div className="flex flex-col justify-center items-center p-20">
      <h1 className="text-2xl font-bold">Add a Product</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            id="title"
            className="border-gray-300 border-2 focus:outline-blue-400 w-80 md:w-96 block mb-5 px-3 py-2 rounded"
            type="text"
            placeholder="Enter product title"
            required
          />
          <label htmlFor="file">Upload Image</label>
          <input
            name="image"
            className="border-gray-300 border-2 focus:outline-blue-400 w-80 md:w-96 block mb-5 px-3 py-2 rounded"
            type="file"
            accept="image"
            required
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
            required
          />
          <div className="flex flex-col">
            <label htmlFor="desc">Description</label>
            <textarea
              name="description"
              id="desc"
              rows="3"
              className="px-3 py-2 md:w-96 w-80 border-gray-300 border-2 focus:outline-blue-400"
              placeholder="Write short description"
              required
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
