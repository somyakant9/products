import React, { useEffect } from "react";
import AddProduct from './AddProduct';
import Product from './Product';
import Pagination from './Pagination';
import axios from 'axios';
import styles from './products.module.css'
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const [data, setData] = React.useState([]);
const [page,setPage] = React.useState(1);
const [limit,setLimit] = React.useState(3);

  useEffect(() => {
    axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
      .then((r) => {

        setData(r.data);
      })
  },[page,limit]);

  return (
    <div>
      <AddProduct />
      <div className={styles.grid}>
        {data.map((d) => (
          <Product d={d}  key={d.id} />
        ))};
      </div>
      <Pagination setLimit={setLimit} setPage={setPage} page={page} limit={limit} />
    </div>
  );
};

export default Products;
