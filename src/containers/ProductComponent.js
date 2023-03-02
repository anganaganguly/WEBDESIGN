import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  //mapping is used to display products
  const renderList = products.map((product) => {
    //destructuring
    const { id, title, image, price, category } = product;

    const fourWideColumnStyle = {
     marginLeft: "20px",
     padding : "10px",
     //backgroundColor : "#eeeeee",
     width : "100%",
     border: "4px solid #ccc",
     borderRadius: "10px",
    };

    const uiLinksCardsStyle = {
      textDecoration: 'none'
      //backgroundColor : "red"
     };

    const cardStyle = {
      padding: "10px",
      margin: "10px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      // backgroundColor : "green",
    };

    const imageDivStyle = {
      height:"90%",
      width: "250px",
      flex: "1 1 auto",
      // backgroundColor : "yellow"
    };

    const imageStyle = {
      flex: "1",
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "cover"
    };

    const contentStyle = {
      flex: "0 0 auto",
      width: "50%",
      marginTop: "50px",
      paddingLeft: "15px",
      color: "black",
      fontSize:"14px",
      fontWeight:"bold",
      textDecoration: 'none'
      // backgroundColor : "cyan"
    };



    return (
      <div className="four-wide-column" key={id} style={fourWideColumnStyle}>
            <Link to={`/product/${id}`} style={uiLinksCardsStyle}>
                    <div className="card" style={cardStyle}>
                      <div className="image" style={imageDivStyle}>
                        <img src={image} alt={title} style={{ maxWidth: "100%" }}/>
                      </div>
                      <div className="content" style={contentStyle}>
                        <div className="header">{title}</div>
                        <br/>
                        <div className="meta price" style={{ textDecoration: 'none' }}><b>Rs {price}</b></div>
                        <br/>
                        <div className="meta category">{category}</div>
                      </div>
                    </div>
            </Link>
      </div>
    );
  });

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gridGap: "20px",
    margin: "20px",
  };

  return <div style={gridStyle}>{renderList}</div>;
};

export default ProductComponent;