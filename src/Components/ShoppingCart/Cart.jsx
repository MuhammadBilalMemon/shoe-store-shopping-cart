import React, { useContext } from "react";
import { Grid } from "@material-ui/core";

import { ShoppingCartContext } from "../../Context/ShoppingCartContext";

import ShoppingCardList from "./ShoppingCartList";

const Cart = () => {
  const { addCartToItems } = useContext(ShoppingCartContext);

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        {addCartToItems.length > 0 && <ShoppingCardList />}

        {addCartToItems.length === 0 && (
          <div>
            <h4>You cart is empty. Please check the shop menu</h4>
          </div>
        )}
      </Grid>
    </>
  );
};

export default Cart;
