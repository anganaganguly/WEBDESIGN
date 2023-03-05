import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productsActions";
import "../App.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetail = async (id) => {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err) => {
        console.log("Err: ", err);
      });
      dispatch(selectedProduct(response.data));
      setIsLoading(false);
    };

    if (productId && productId !== "") {
      fetchProductDetail(productId);
    }

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId, dispatch]);

  const productDetails = {
    marginTop: "20px",
  };

  const imageColumn = {
    maxWidth: "50%",
  };

  const productImage = {
    maxHeight: "500px",
  };

  const detailsColumn = {
    maxWidth: "50%",
  };

  const productTitle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "10px",
  };

    
  const productPrice = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  const productCategory = {
    fontSize: "1.2rem",
    marginTop: "20px",
  };

  const productDescription = {
    marginTop: "20px",
  };

  const cartButton = {
    marginTop: "20px",
    width:"auto",
    border: "4px solid #007bff",
    borderRadius: "10px",
    display:" inline-block",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease"
  };

  

  return (
    <div className="ui grid container" style={productDetails}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="ui segment" style={{paddingTop:"80px",marginTop:"25px"}}>
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider"></div>
            <div className="middle aligned row">
              <div className="column lp" style={imageColumn}>
                <img
                  className="ui fluid image"
                  src={product.image}
                  alt="product"
                  style={productImage}
                />
              </div>
              <div className="column rp" style={detailsColumn}>
                <h1 style={productTitle}>{product.title}</h1>
                <h2>
                  <span className="ui teal tag label" style={productPrice}>
                    Rs {product.price}
                  </span>
                </h2>
                <h3 className="ui brown block header" style={productCategory}>
                  {product.category}
                </h3>
                <p style={productDescription}>{product.description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content" style={cartButton} >
                    Add to Cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;