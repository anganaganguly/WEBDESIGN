// import React, { useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     selectedProduct,
//     removeSelectedProduct,
// } from "../redux/actions/productsActions";


// //using param we get id and using id we call api
// const ProductDetails = () => {
//   const { productId } = useParams();

//   let product = useSelector((state) => state.product);
//   const { image, title, price, category, description } = product;
//   const dispatch = useDispatch();

//   const fetchProductDetail = async (id) => {
//     const response = await axios
//       .get(`https://fakestoreapi.com/products/${id}`)
//       .catch((err) => {
//         console.log("Err: ", err);
//       });
//     dispatch(selectedProduct(response.data));
//   };


//   useEffect(() => {
//     if (productId && productId !== "") fetchProductDetail(productId);
//     return () => {
//       dispatch(removeSelectedProduct());
//     };
//   }, [productId]);

//   return (
//     <div className="ui grid container">
//       {Object.keys(product).length === 0 ? (
//         <div>...Loading</div>
//       ) : (
//         <div className="ui placeholder segment">
//           <div className="ui two column stackable center aligned grid">
//             <div className="ui vertical divider">AND</div>
//             <div className="middle aligned row">
//               <div className="column lp">
//                 <img className="ui fluid image" src={image} />
//               </div>

//               <div className="column rp">
//                 <h1>{title}</h1>
//                 <h2>
//                   <a className="ui teal tag label">Rs{price}</a>
//                 </h2>
//                 <h3 className="ui brown block header">{category}</h3>
//                 <p>{description}</p>
//                 <div className="ui vertical animated button" tabIndex="0">
//                   <div className="hidden content">
//                     <i className="shop icon"></i>
//                   </div>
//                   <div className="visible content">Add to Cart</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>

//   );

// };



// export default ProductDetails;

import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct,removeSelectedProduct} from "../redux/actions/productsActions";


//using param we get id and using id we call api
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const productDetails = {
    marginTop: "30px"
  }

  const productImage = {
    maxWidth: "100%"
  }

  const imageColumn = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  const detailsColumn = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: "30px"
  }


  const productTitle = {
    fontSize: "2.5rem",
    marginBottom: "10px"
  }

  const productPrice = {
    marginBottom: "20px"
  }

  const productCategory = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px"
  }

  const productDescription = {
    fontSize: "1.2rem",
    marginBottom: "20px"
  }

 

  const cartButton = {
    marginTop: "30px"
  }

  return (
    <div className="ui grid container" style={productDetails}>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid" >
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp" style={imageColumn} >
                <img className="ui fluid image" src={image} style={productImage}/>
              </div>
              <div className="column rp" style={detailsColumn}>
                <h1 style={productTitle}>{title}</h1>
                <h2>
                  <a className="ui teal tag label" style={productPrice}>Rs{price}</a>
                </h2>
                <h3 className="ui brown block header" style={productCategory}>{category}</h3>
                <p style={productDescription}>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content" style={cartButton}>Add to Cart</div>
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