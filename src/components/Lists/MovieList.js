import React from "react";

const MovieList=(props)=>{
	return(
		<>
			{props.movies.map((movie,index)=>
				<div className="bg-white sm:flex justify-center items-center h-screen">
          <div className="md:flex shadow-lg  items-center justify-between bg-white rounded-lg p-6">
            <div className="w-4/12 -m-10">
              <img className=" rounded rounded-r-none" src="{movie.Poster}"/>
            </div>
            <div className="text-center">
              <h2 className="text-lg">{movie.Title}</h2>
              <div className="text-purple-500">{movie.Year}</div>
              <div className="text-gray-600">{movie.imdbRating}</div>
            </div>
          </div>
        </div>
			)}
		</>
)};
export default MovieList;
