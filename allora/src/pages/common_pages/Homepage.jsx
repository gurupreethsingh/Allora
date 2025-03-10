import React, { useEffect, useState } from "react";
import axios from "axios";
import backendGlobalRoute from "../../config/config";

const Homepage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${backendGlobalRoute}/api/all-categories`
        );
        console.log("Fetched Categories:", response.data);
        setCategories(response.data);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${backendGlobalRoute}/api/all-added-products`
        );
        console.log("Fetched Products:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Get correct image URL from backend
  const getImageUrl = (imageUrl) => {
    if (imageUrl) {
      const normalizedPath = imageUrl
        .replace(/\\/g, "/")
        .split("uploads/")
        .pop();
      return `${backendGlobalRoute}/uploads/${normalizedPath}`;
    }
    return "/images/default.jpg"; // Default placeholder if no image
  };

  return (
    <div>
      {/* Hero Section (Product Carousel) */}
      <div className="flex flex-col justify-center herosection">
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-inner">
            {products.length > 0 ? (
              products.map((product, index) => (
                <div
                  key={product._id}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  data-bs-interval="5000"
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={getImageUrl(product.product_image)}
                      onError={(e) => (e.target.src = "/images/default.jpg")}
                      className="d-block w-full object-cover rounded-md"
                      alt={product.product_name || "Product"}
                      style={{ height: "300px" }} // Dynamic height
                    />

                    {/* Dark Overlay for Better Text Visibility */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
                      <h5 className="text-lg md:text-2xl font-bold">
                        {product.product_name}
                      </h5>
                      <p className="text-sm md:text-base mt-2">
                        {product.description?.slice(0, 50)}...
                      </p>
                      <a
                        href="/shop"
                        className="mt-3 bg-red-500 text-white px-5 py-2 rounded-lg text-xs md:text-sm font-bold inline-block"
                      >
                        SHOP NOW
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 mt-4">
                Loading products...
              </p>
            )}
          </div>

          {/* Previous Button */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          {/* Next Button */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="pt-5 pb-5 border">
        <div className="relative mx-auto w-[90%] mt-6">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Categories
          </h2>
          {categories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg shadow-md text-center bg-white hover:shadow-lg transition-all"
                >
                  <a
                    href="/shop"
                    className="text-lg font-bold text-cyan-700 hover:text-cyan-900"
                  >
                    {category.category_name}
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 mt-4">
              Loading categories...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
