import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    const fetchProduct = () => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error("server failed to respond");
        })
        .then((data) => {
          if (!ignore) setProducts(data);
        })
        .catch((error) => {
          if (!ignore) setError(error);
        })
        .finally(() => {
          if (!ignore) setLoading(false);
        });
    };

    fetchProduct();

    return () => {
      ignore = true;
    };
  }, []);

  return { products, loading, error };
};
