import React from "react";

function Cards({ product }) {
  const { title, image, price } = product;

  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl max-w-[450px]">
        <figure>
          <img
            className=" w-96 h-96"
            src={product.attributes.image}
            alt={product.attributes.title}
          />
        </figure>
        <div className="card-body items-center flex">
          <h2 className="card-title font-semibold text-[#294E6A] items-center">
            Name: <span className="font-bold"> {product.attributes.title}</span>
          </h2>
          <p className="gap-1">
            Price:
            <span className="text-[#463AA1] font-bold">
              ${product.attributes.price}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
