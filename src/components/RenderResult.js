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

          <div class="row resultBox">
            <div class="col s10 offset-s1 m8 offset-m2">
              <div class="row card blue-grey darken-1">
                <div class="card-content white-text">
                <div className="col s7 m4 l3">
                 <figure>
                  <img className="responsive-img" src={selection.posterURLs.original} alt="Cover-Poster"/>
                 </figure>
                </div>
                  <p class="card-title">{selection.title}</p>
                  <small>{selection.year}</small> <small>{selection.imdbRating}</small> <small>{selection.runtime} minutes</small>
                  <p>{selection.overview}</p>
                  <p>
                  Cast: {selection.cast.map(member => <span key={member}> {member} /</span> )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          // <div className="section">
          //   <div className="col s10 offset-s1">
          //     <div>
          //       <div className="col s4">
          //         <figure className="section">
          //           <img className="responsive-img" src={selection.posterURLs.original} alt="Cover-Poster"/>
          //         </figure>
          //       </div>
          //       <div className="col s8">
          //         <div className="section">
          //           <p>
          //             <strong>{selection.title}</strong> <small>{selection.year}</small> <small>{selection.imdbRating}</small> <small>{selection.runtime} minutes</small>
          //             <br/>
          //             {selection.overview}
          //             <br/>
          //             Cast: {selection.cast.map(member => <span key={member}> {member} /</span> )}
          //           </p>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </div>
        );
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

        <div class="row resultBox">
            <div class="col s10 offset-s1 m8 offset-m2">
              <div class="row card blue-grey darken-1">
                <div class="card-content white-text">
                <div className="col s7 m4 l3">
                 <figure>
                  <img className="responsive-img" src={selection.posterURLs.original} alt="Cover-Poster"/>
                 </figure>
                </div>
                  <p class="card-title">{selection.title}</p> 
                  <small>{selection.year}</small> <small>{selection.imdbRating}</small> <small>{selection.seasons} seasons</small>
                  <p>{selection.overview}</p>
                  <p>
                  Cast: {selection.cast.map(member => <span key={member}> {member} /</span> )}
                  </p>
                </div>
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