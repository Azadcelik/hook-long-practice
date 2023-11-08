import React, { useEffect } from 'react';
import ProductListItem from '../ProductListItem';
import ProductDetails from '../ProductDetails';
import './ProductView.css';
import { useState } from 'react';
function ProductView({ products }) {

  // console.log(products)
  const [sideOpen, setSideOpen] = useState(true);
  const [selectedProduct,setSelectedProduct] = useState('')

 // Open side panel
  useEffect(() => {
    // console.log(`selectedProduct CHANGED TO`, selectedProduct);
    setSideOpen(true);
  }, [selectedProduct])

  // Deselect product
  useEffect(() => {
    // console.log(`sideOpen CHANGED TO`, sideOpen);
    setSelectedProduct();
  }, [sideOpen]);



  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
          // <div>
          //   {console.log(item)}
            <ProductListItem
              key={item.id}
              product={item}
              isSelected={ selectedProduct && item.id === selectedProduct.id}
              onClick={() => setSelectedProduct(item)}
              />
              // </div>
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle"
               onClick={() =>setSideOpen(!sideOpen)}>
            {sideOpen ? '>' : '<'}
          </div>
        </div>
        <ProductDetails visible={sideOpen} product={selectedProduct}/>
      </div>
    </div>
  );
}

export default ProductView;
