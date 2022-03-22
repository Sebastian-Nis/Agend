import React from "react";

const MovieListHeading = (props) =>{
return (
	<div>
		<h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-black">
			{props.heading}	
    </h3>
	</div>
)
}
 export default MovieListHeading;