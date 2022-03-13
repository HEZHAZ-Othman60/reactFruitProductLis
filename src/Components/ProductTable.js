  import React from 'react';
  import ProductRow from './ProductRow';
  
  const ProductTable = ({products, inStockOnly, filterText}) => {
      const rows = [];
      console.log(filterText);

      products.forEach(product => {
          if (inStockOnly && product.stock <= 0)
              return ;
              if (filterText && product.name.indexOf(filterText) == -1
              ){
                  return;
              }
          rows.push( <ProductRow product={product}/>)
  
  
  
      });
      return (
          <div>
              ProductTable
  
              {rows}
  
          </div>
      );
  };
  
  export default ProductTable;