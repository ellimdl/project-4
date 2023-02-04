import React from "react";
import Condo from "./Condo";

export default function CondoList({ condos }) {
  // console.log("filtered list of condos", condos);

  if (condos.length < 1) {
    return (
      <h2 className="section-title">
        no new launches matched your search criteria
      </h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">Latest new launch condos in Singapore</h2>
      <div className="condos-center">
        {condos.map((item, index) => {
          return <Condo key={index} {...item} />;
        })}
      </div>
    </section>
  );
}
