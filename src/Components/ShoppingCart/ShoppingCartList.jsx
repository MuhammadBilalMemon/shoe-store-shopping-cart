import React, { useContext } from "react";
import {
  Button,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";

import { ShoppingCartContext } from "./../../Context/ShoppingCartContext";

const ShoppingCardList = () => {
  const {
    addCartToItems,
    countItems,
    totalAmount,
    increment,
    decrement,
  } = useContext(ShoppingCartContext);

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        sm={6}
      >
        {addCartToItems.map((product) => (
          <Card
            key={product.productId}
            style={{ maxWidth: 345, padding: 20, margin: 10 }}
          >
            <CardActionArea>
              <CardMedia
                style={{ height: 250, width: 250 }}
                image={product.productImage}
                title={product.productName}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.productName}
                </Typography>
                <Typography component="h4">
                  Price : {product.productPrice}
                </Typography>
                <Typography component="h4">
                  Qauntity : {product.quantity}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                onClick={() => {
                  increment({
                    productId: product.productId,
                    productName: product.productName,
                    productPrice: product.productPrice,
                    productImage: product.img,
                  });
                }}
                variant="outlined"
                size="small"
                color="primary"
              >
                +
              </Button>
              {product.quantity > 0 && (
                <Button
                  onClick={() => {
                    decrement({ productId: product.productId });
                  }}
                  variant="outlined"
                  size="small"
                  color="secondary"
                >
                  -
                </Button>
              )}
            </CardActions>
          </Card>
        ))}
      </Grid>
      {addCartToItems.length > 0 && (
        <Grid container direction="column" alignItems="right" sm={6}>
          <Button size="large" color="primary">
            Total Items : {countItems}
          </Button>
          <Button size="large" color="primary">
            Total Price : {totalAmount}
          </Button>
          <hr />
        </Grid>
      )}
    </>
  );
};

export default ShoppingCardList;
