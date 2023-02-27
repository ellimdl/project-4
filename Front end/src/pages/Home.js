import React, { useState, useEffect } from "react";
import CondoList from "../components/CondoList";
import SearchForm from "../components/SearchForm";
// import results from "../results2";
import axios from "axios";

export default function Home() {
  // const [fullDataSet] = useState(results); // load full dataset
  // const [filtered, setFiltered] = useState(results); // store filtered dataset

  const [products, setProducts] = useState([]);
  const [masterProducts, setMasterProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
            // "http://localhost:5001/products" //api here
            "https://tough-peplum-worm.cyclic.app/products"
        );
        console.log(res.data)
        setMasterProducts(res.data);
        setProducts(res.data); // Give it an initial data before filter takes place
      } catch (err) {
        setMasterProducts(0)
      }
    };
    getProducts();
  }, []);

  // on submit to filter
  const filterCondo = (searchTerm) => {
    // console.log("full dataset:", fullDataSet);
    // console.log("filter Condo by search term:", searchTerm);

    // if "1" received, add "0" in front of it, else return as it is
    console.log("searchTerm before", searchTerm, typeof searchTerm);
    searchTerm = searchTerm.length === 1 ? "0" + searchTerm : searchTerm;
    console.log("searchTerm after", searchTerm, typeof searchTerm);
    // const data = fullDataSet.filter(
      const filtered = masterProducts.filter(
        (element) => element.district === searchTerm
      );
    const data = filtered.length === 0 ? masterProducts : filtered;
    console.log("filtered data:", data);
    // setFiltered(data);
    setProducts(data);
  };

  return (
    <main>
      <SearchForm filterCondo={filterCondo} />
      {/* <CondoList condos={filtered} /> */}
      <CondoList condos={products} />
    </main>
  );
}
