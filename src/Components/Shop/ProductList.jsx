import React, { useContext } from "react";
import { ProductContext } from "./../../Context/ProductContext";
import { ShoppingCartContext } from "./../../Context/ShoppingCartContext";

import { Link } from "react-router-dom";

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

const ProductList = () => {
  const products = useContext(ProductContext);

  const { addProduct, increment, addCartToItems } = useContext(
    ShoppingCartContext
  );

  const ItemInCart = (product) => {
    return addCartToItems.find((item) => item.productId === product.productId);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center">
            {products.products.map((product) => (
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
                    <Typography component="h4">
                      ${product.productPrice}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions textalign="center">
                  {!ItemInCart(product) && (
                    <Button
                      onClick={() => {
                        addProduct({
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
                      Add to cart
                    </Button>
                  )}

                  {ItemInCart(product) && (
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
                      Add more
                    </Button>
                  )}

                  <Link to={`product/${product.slug}`}>
                    <Button variant="outlined" size="small" color="secondary">
                      Details
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductList;
