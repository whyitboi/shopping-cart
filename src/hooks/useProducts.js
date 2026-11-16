import { useEffect, useState } from "react";

export const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = () => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error("server failed to respond");
        })
        .then((data) => setProducts(data))
        .catch((error) => setError(error))
        .finally(() => setloading(false));
    };

    fetchProduct();
    return { products, loading, error };
  });
};
