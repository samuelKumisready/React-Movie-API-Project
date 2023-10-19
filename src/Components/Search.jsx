import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        handleSearch();
      }
    }, 300); // Delay before making the API request (adjust as needed)

    return () => {
      clearTimeout(delayDebounceFn); // Clear the timeout if searchTerm changes
    };
  }, [searchTerm]);

  const handleSearch = async () => {
    setIsloading(true);
    const apiUrl = `https://api.themoviedb.org/3/search/movie?query=+${searchTerm}&api_key=e4688475e3a27682b3a5955de88ffa26`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("there was a problem fetching from network");
      }
      const data = await response.json();
      const result = await data.results;
      console.log(result);
      setSearchResults(result.slice(0, 5));
    } catch (error) {
      console.error(error);
    }
    setIsloading(false);
  };
  return (
    <div className="relative">
      <div className="flex p-2 bg-white rounded-md ">
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          type="text"
          placeholder="Search..."
          className="hidden outline-none md:block"
        />
        <BsSearch size={20} className="cursor-pointer" onClick={handleSearch} />
      </div>
      <div className="absolute z-20 w-full bg-white rounded top-12">
        {searchResults.map((movie) => (
          <div
            key={movie.id}
            className={`p-2 w-full cursor-pointer ${
              searchTerm === "" ? "hidden" : ""
            }`}
          >
            <div className="flex items-center space-x-2 hover:bg-slate-100 hover:font-semibold">
              <div className="object-cover h-[75px] w-14">
                <img
                  className="h-[65px] "
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                />
              </div>
              <h1>
                {movie.title.length > 14
                  ? movie.title.slice(0, 14).concat("...")
                  : movie.title}
              </h1>
            </div>
            <div className="w-full h-[1px] bg-gray-200 "></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
