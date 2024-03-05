import { useState, useEffect } from "react";

export const useProducts = ({section}) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${section}`, {mode: "cors"})
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("server error");
              }
              return response.json();
        })
        .then((response) => {
            for (let i = 0; i < response.length; i++) {
                response[i].quantity = 0;
                response[i].disabled = false;
            }
            setProducts(response)
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, [])

    return {products, error, loading}
}