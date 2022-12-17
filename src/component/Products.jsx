import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ selector, dispatch }) => {
  const data = selector.product;
  console.log("selector=", selector);
  const navigate = useNavigate();

  const goToCart = (index) => {
    dispatch({ type: "PRODUCT_ID", payload: index });
    navigate("/productDetails");
  };

  return (
    <>
      <Grid container sx={{bgcolor:"purple"}} spacing={2} className="main_product_container">
        {data.map((item, index) => {
          return (
            <Grid sx={{bgcolor:"white"}} className="product_container">
              <img src={item.image} alt="" width="100px" height="150" />
              <Typography sx={{fontSize:20}} className="title">{item.title}</Typography>
              <h5>{`Price : ₹${item.price}`}</h5>
              <Button variant="outlined" onClick={() => goToCart(index)}>Add To Cart </Button>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Products;
