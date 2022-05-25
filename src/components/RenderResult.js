import React from "react";


const RenderResult = ({ selection, display }) => {

    if (typeof selection == 'undefined') {
      return(
        <div>
          Testing
        </div>
    )
    } else if (display === 'movie' && Object.keys(selection).length !== 0) {
        return (
        // <div className="columns is-mobile">
        //     <div className="column is-10 is-offset-1">
        //     <div className="box">
        //         <span>Movie Title: {selection.title}</span>
        //         <span>Year: {selection.year}</span>
        //         <span>Rating: {selection.imdbRating}</span>
        //         <span>Movie Info: {selection.overview}</span>
        //         <span>Cast: {selection.cast}</span>
        //     </div>
        //     </div>
        // </div>

        <div className="columns is-mobile">
        <div className="column is-10 is-offset-1">
            <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={selection.posterURLs.original} alt="Cover-Poster"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{selection.title}</strong> <small>{selection.year}</small> <small>{selection.imdbRating}</small> <small>{selection.runtime} minutes</small>
                    <br/>
                    {selection.overview}
                    <br/>
                    Cast: {selection.cast.map(member => <span key={member}> {member} /</span> )}
                  </p>
                </div>
              </div>
            </article>
            </div>
            </div>
        </div>
        )
    } else if (display === 'series' && Object.keys(selection).length !== 0) {
        return(
            // <div className="columns is-mobile">
        //     <div className="column is-10 is-offset-1">
        //     <div className="box">
        //         <span>Movie Title: {selection.title}</span>
        //         <span>Year: {selection.year}</span>
        //         <span>Rating: {selection.imdbRating}</span>
        //         <span>Movie Info: {selection.overview}</span>
        //         <span>Cast: {selection.cast}</span>
        //     </div>
        //     </div>
        // </div>

        <div className="columns is-mobile">
        <div className="column is-10 is-offset-1">
            <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={selection.posterURLs.original} alt="Cover-Poster"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{selection.title}</strong> <small>{selection.year}</small> <small>{selection.imdbRating}</small> <small>{selection.seasons} seasons</small>
                    <br/>
                    {selection.overview}
                    <br/>
                    Cast: {selection.cast.map(member => <span key={member}> {member} /</span> )}
                    {/* {allCountries.map(allCountry => <option key={allCountry}> {allCountry}</option> )} */}
                  </p>
                </div>
              </div>
            </article>
            </div>
            </div>
        </div>
        )
    } else {
        return(
            <div>
            </div>
        )
    }
    
}

export default RenderResult;