import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "./../../Context/ProductContext";

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

const ProductDetails = () => {
  const { slug } = useParams();
  const { products } = useContext(ProductContext);

  const filterItem = () => {
    return products.filter((product) => product.slug === slug);
  };
  const filterdProduct = filterItem();

  return (
    <div>
      <Grid container justify="center">
        {filterdProduct.map((product) => (
          <Card
            key={product.productId}
            style={{ maxWidth: 345, padding: 20, margin: 10 }}
          >
            <CardActionArea>
              <CardMedia
                style={{ height: 250, width: 250 }}
                image={product.img}
                title={product.productName}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.productName}
                </Typography>
                <Typography component="h4">${product.productPrice}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default ProductDetails;
