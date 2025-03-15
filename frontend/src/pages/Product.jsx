import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/breadcrums/Breadcrum';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import DescriptionBox from '../components/descriptionBox/DescriptionBox';
import RelatedProducts from '../components/relatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();

  if (all_product.length === 0) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Loading products...</div>;
  }
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Loading product...</div>;
  }

  return (
    <div>
        <Breadcrum product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox />
        <RelatedProducts />
    </div>
  )
}

export default Product