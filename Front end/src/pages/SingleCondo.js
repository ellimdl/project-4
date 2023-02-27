// import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
// import results from "../results2";

export default function SingleCondo() {
  const { project } = useParams();

  const [products, setProducts] = useState([]);
  const [singleCondoObj, setSingleCondoObj] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
            // "http://localhost:5001/products" //api here
            "https://tough-peplum-worm.cyclic.app/products"
        );
        console.log(res.data, project)
        let index = -1;

        for(let i=0 ; i<res.data.length ; i++){
          if(res.data[i].project === project){
            index = i;
            break; // stop looking
          }
        }

        setSingleCondoObj(res.data[index]);
        setProducts(res.data);

        // let index = results.findIndex(function (element) {
          // let index = products.findIndex(function (element) {
          //   console.log("element:", element, products)
          //   return element.project === project;
          // });
          // // let singleCondoObj = results[index];
          // setSingleCondoObj((prevState) => {
            
          //   return products[index]
          // });
          // console.log("singleCondoObj:", singleCondoObj, index);
      } catch (err) {
        setProducts(0)
      }
    };
    getProducts();
  }, []);

  const DisplayCard = () => {
    return (
      <div className="card">        
        <img
          src={
            singleCondoObj.img
              ? singleCondoObj.img
              : "https://c4.wallpaperflare.com/wallpaper/745/584/835/apartment-architecture-building-condo-wallpaper-preview.jpg"
          }
          alt={"Building"}
        ></img>
        <div className="card-info">
          <p>
            <span className="card-data">Condo Name :</span>{" "}
            {singleCondoObj.project}
          </p>
          <p>
            <span className="card-data">District :</span>{" "}
            {singleCondoObj.district}
          </p>
          <p>
            <span className="card-data">Street Name :</span>{" "}
            {singleCondoObj.street}
          </p>
          <p>
            <span className="card-data">Number Of Units :</span>{" "}
            {singleCondoObj.totalUnits}
          </p>
          <p>
            <span className="card-data">Developer Name :</span>{" "}
            {singleCondoObj.developerName}
          </p>
          <p>
            <span className="card-data">Expected TOP Year :</span>{" "}
            {singleCondoObj.expectedTOPYear}
          </p>
        </div>
      </div>
    )
  }

  return (
    <section className="section card-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      {/* <h1>{project}</h1> */}
      <h2 className="section-title">{project}</h2>      
      {singleCondoObj ? <DisplayCard /> : null}
    </section>
  );
}
