import React from "react";

const MovieList=(props)=>{
	return(
		<>
			{props.movies.map((movie,index)=>{
        if ((movie.Poster)===("N/A"))
          return(<></>)
        else
          return(

        
<>    
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  
            
              <article className="overflow-hidden rounded-lg shadow-lg">
  
                  <a href="#">
                      <img alt="Placeholder" className="block h-auto w-full" src={movie.Poster}/>
                  </a>
  
                  <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                          <a className="no-underline hover:underline text-black" href="#">
                              {movie.Title}
                          </a>
                      </h1>
                      <p className="text-grey-darker text-sm">
                          {movie.Year}
                      </p>
                  </header>
  
                  <div className="flex items-center justify-between p-2 md:p-4">
                      <a className="flex items-center no-underline hover:underline text-black" href="#">
                          <p className="ml-2 text-sm">{movie.Director}</p>
                      </a>
                      <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                          <span className="hidden">{movie.Year}</span>
                      </a>
                  </div>
  
              </article>
             
  
          </div>

          </>          
          )
      } 
			)}
		</>
)};
export default MovieList;
