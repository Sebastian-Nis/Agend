
import { useEffect, useState } from 'react';
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import SearchBox from '../SearchBox';

export function Lists() {

	const [movies, setMovies] = useState([]);
	const [searchValue,setSearchValue]=useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);
	
		
	return(
		<>
      <div className='flex justify-around items-center'>
        <MovieListHeading heading='Movies'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

	  <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">				
			<MovieList movies={movies}/>
		</div>
		</div>
		</>
	)
};

// http://www.omdbapi.com/?i=tt3896198&apikey=de2f2cf3


	// const API_KEY='de2f2cf3'
	// useEffect(() => {
  //   fetch(`https://www.omdbapi.com/?apikey=${API_KEY}`, {
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   })
  //     .then((res) => {return res.json();})
  //     .then((data) => {setAmmo(data)});

  //   },[])
