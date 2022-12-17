import { Divider, Grid } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ProductDetails = ({ selector, dispatch }) => {
  const [product, setProduct] = useState([]);
  const [updateQty, setUpdateQty] = useState(product.price);
  const [count, setCount] = useState(1);
  console.log(updateQty, count);
  const data = selector.product;
  const productId = selector.productId;
  // console.log("selector==>",selector);

  // const handleUpdateQty = (index, isIncrease) => {
  //     var tempData = cartItems;
  //     if (isIncrease) {
  //         tempData[index].qty += 1;
  //     } else {
  //         if (tempData[index].qty > 1) {
  //             tempData[index].qty -= 1;
  //         } else {
  //             // handleRemove(tempData[index]);
  //             return;
  //         }
  //     }
  //     dispatch(manipulateCart(UPDATE_QTY, tempData));
  // };

  useEffect(() => {
    const productFilter = data.filter((item, index) => index === productId);
    //  console.log("productFilter==",productFilter);
    setProduct(productFilter[0]) && priceIncrease();
  }, []);

  const priceIncrease = () => {
    setCount(count + 1);
    setUpdateQty(product.price * count);
  };
  const priceDecrease = () => {
    count > 1 && setCount(count - 1);
    setUpdateQty(product.price * count);
  };

  return (
    <>
      {/* <div>
      <h1>Product Details</h1>
      <h1>{product.category} </h1>
      <h2>{product.title} </h2>
      <h1>{product.price} </h1>
      <span>
        <button onClick={priceIncrease}>+</button>
        <span>{count}</span>
        <button onClick={priceDecrease}>-</button>
      </span>
      <h1>{count * product.price}</h1>
    </div> */}
      <br />
      <br />
      <br />

      <Grid container spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <img src={product.image} width={300} alt="" />
        </Grid>

        <Grid item xs={4}>
          <Grid container spacing={2} align="start">
            <Grid item xs={12}>
              <h3>{product.title} </h3>
            </Grid>
            <Grid item xs={12}>
              <h2> ${product.price} </h2>
            </Grid>
            <Grid item xs={12}>
              <p> {product.description} </p>
            </Grid>

            <Grid item xs={2}>
              <Button onClick={priceIncrease} align="start" fullWidth variant="contained">
                +
              </Button>
            </Grid>
            <Grid item align="center" xs={2}>
              <h1>{count} </h1>
            </Grid>
            <Grid  item xs={2}>
              <Button onClick={priceDecrease} fullWidth variant="contained">
                -
              </Button>
            </Grid>
            <Grid item xs={12}>
              <h1> Total Price: ${count * product.price} </h1>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
};

export default ProductDetails;
