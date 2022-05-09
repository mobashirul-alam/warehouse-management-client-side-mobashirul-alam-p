import { useEffect, useState } from 'react';

const useLoadProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `https://fitness-pro-equipment-house.herokuapp.com/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return [products, setProducts];
};

export default useLoadProducts;