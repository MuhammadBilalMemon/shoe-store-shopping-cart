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
  const { addCartToItems } = useContext(ShoppingCartContext);
  console.log(addCartToItems);

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
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
                <Typography component="h4">${product.productPrice}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" size="small" color="primary">
                +
              </Button>
              <Button variant="outlined" size="small" color="secondary">
                -
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default ShoppingCardList;
