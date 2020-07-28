import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { useToasts } from "react-toast-notifications";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const { addToast } = useToasts();

  const addToBasket = () => {
    addToast("Added to Basket", { appearance: "success", autoDismiss: true });

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p> {title} </p>
        <p className="product__">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span role="img" aria-label="sheep">
                ⭐
              </span>
            ))}
        </div>
      </div>

      <img src={image} alt="pic" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
