import React from 'react'
import { useProducts } from '../context';
import ProductCard from '../components/products/ProductCard';
import { spinner } from '../components/icons';
import "../styles/products.css";

const ProductsPage = () => {
    const { isLoading, products } = useProducts();

    if (isLoading) {
      return <span>{spinner}</span>;
    }
  return (
    <div>
      <div className="products">
        {products.map((product) => (
          <div className="card-product" key={product._id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage;
