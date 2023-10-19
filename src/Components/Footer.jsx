import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <div
        className="relative bg-center bg-no-repeat bg-cover h-52"
        style={{
          backgroundImage: `url(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_crIjek4rPOuuO0n42wdB4uNUyiZH9N0vg&usqp=CAU"
          )`,
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute bottom-0 w-full text-sm text-center text-white">
          <hr className="mx-2 mb-1 border-blue-600" />
          <h1>
            Sam's Movies is top of free streaming website, where to watch movies
            online free without registration required. With a big database and
            great features, we're confident FMovies is the best free movies
            online website in the space that you can't simply miss!
          </h1>
          <h1 className="text-blue-600 ">
            This site does not store any files on our server, we only linked to
            the media which is hosted on 3rd party services.
          </h1>
          <h1 className="text-xs text-gray-400">
            Links: watch movies online, zoro anime, free watch anime online
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
