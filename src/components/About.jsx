import React, { useEffect, useState } from "react";

export default function About() {
  const [albums, setAlbums] = useState([]);

  function LazyImage({ src, alt, placeholder, width, className }) {
    const [isLoad, setIsLoad] = useState(false); // Local state for each image

    return (
      <div>
        {!isLoad && (
          <img
            src={placeholder}
            alt="Loading..."
            width={width}
            className={className}
          />
        )}
        <img
          src={src}
          alt={alt}
          width={width}
          className={`${className} ${!isLoad ? "hidden" : ""}`}
          onLoad={() => setIsLoad(true)} // Set loaded state for individual image
        />
      </div>
    );
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="my-container grid gap-4 grid-cols-3">
      {albums.length > 0 &&
        albums.map((value, index) => (
          <div key={index} className="p-5 border-solid border-2 border-sky-600">
            <LazyImage
              src={value.thumbnailUrl}
              alt={value.title}
              placeholder="https://via.placeholder.com/150"
              width={350}
              className="rounded-[30px] blur-[2px] hover:blur-[0px]"
            />
            <h3 className="font-bold pt-2 text-2xl">{value.title}</h3>
          </div>
        ))}
    </div>
  );
}
