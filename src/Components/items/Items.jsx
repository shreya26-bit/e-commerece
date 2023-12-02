import React from "react";

function Items(props) {
  return (
    <div className="d-flex row justify-content-center align-items-center cards-content">
      <div className="  mt-4 " style={{ width: "20rem", border: "none" }}>
        <img src={props.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          {/* <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
        <p className="mt-1">${props.new_price}</p>
        </div>
      </div>
    </div>
  );
}

export default Items;
