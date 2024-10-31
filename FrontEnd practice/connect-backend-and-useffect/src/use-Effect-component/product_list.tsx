
import { useState, useEffect } from 'react';

export const Product_list = ( { category } : { category: string}) => {
    const [products, setProducts] = useState<string[]>([]);

    useEffect(() => {
        console.log('Fetching Products in ', category)
        setProducts(['Product 1', 'Product 2', 'Product 3'])
    }
    , [category])  // This will run only when category changes 

  return (
    <div>product_list</div>
  )
}
