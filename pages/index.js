import React from 'react';
import axios from 'axios';
import ProductList from '../components/Index/ProductList';
//import ProductPagination from '../components/Index/ProductPagination';
import baseUrl from '../utils/baseUrl'


function Home({ products }) {
  //useRouter()

  return (
    <ProductList products={products} />


  )
}


Home.getInitialProps = async () => {

  //fetch data on server
  const url = `${baseUrl}/api/products`;
  //const payload = { params: { page, size } }
  const response = await axios.get(url);

  // return response data as an object

  return { products: response.data }
  // note: object will be merge to with existing props
}

export default Home;
