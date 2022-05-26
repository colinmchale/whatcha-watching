import React from "react";


const RenderResult = ({ selection, display, darkMode }) => {

    if (typeof selection == 'undefined') {
      return(
        <div className="row resultBox">
            <div className="col s10 offset-s1 m8 offset-m2">
              <div className={darkMode ? `row card grey darken-4` : `row card grey lighten-4`}>
                <div className="card-content white-text">
                <p className={darkMode ? `center white-text` : `center black-text`}>
                  Sorry, there are no results for the options you've entered. Please make another selection.
                </p>
                </div>
              </div>
          </div>
        </div>
    )
    } else if (display === 'movie' && Object.keys(selection).length !== 0) {
        return (
          <div className="row resultBox">
            <div className="col s10 offset-s1 m8 offset-m2">
              <div className={darkMode ? `row card grey darken-4` : `row card grey lighten-4`}>
                <div className="card-content white-text">
                <div className="col s7 m4 l3">
                 <figure>
                  <img className="responsive-img" src={selection.posterURLs.original} alt="Cover-Poster"/>
                 </figure>
                </div>
                  <p className={darkMode ? `card-title yellow-text` : `card-title red-text text-darken-4`}>{selection.title}</p>
                  <small className={darkMode ? `white-text` : `black-text`}>{selection.year} </small> 
                  <small className={darkMode ? `amber-text text-accent-4` : `orange-text text-darken-3`}>{selection.imdbRating} imdbRating </small> 
                  <small className={darkMode ? `white-text` : `black-text`}>{selection.runtime} minutes</small>
                  <p className={darkMode ? `orange-text text-darken-3` : `red-text text-darken-4`}>{selection.overview}</p>
                  <p className={darkMode ? `red-text text-darken-3` : `black-text`}>
                  <small>Cast: {selection.cast.map(member => <span key={member}> {member} /</span> )}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    } else if (display === 'series' && Object.keys(selection).length !== 0) {
        return(
          <div className="row resultBox">
            <div className="col s10 offset-s1 m8 offset-m2">
              <div className={darkMode ? `row card grey darken-4` : `row card grey lighten-4`}>
                <div className="card-content white-text">
                <div className="col s7 m4 l3">
                 <figure>
                  <img className="responsive-img" src={selection.posterURLs.original} alt="Cover-Poster"/>
                 </figure>
                </div>
                  <p className={darkMode ? `card-title yellow-text` : `card-title red-text text-darken-4`}>{selection.title}</p>
                  <small className={darkMode ? `white-text` : `black-text`}>{selection.year} </small> 
                  <small className={darkMode ? `amber-text text-accent-4` : `orange-text text-darken-3`}>{selection.imdbRating} imdbRating </small> 
                  <small className={darkMode ? `white-text` : `black-text`}>{selection.seasons} seasons</small>
                  <p className={darkMode ? `orange-text text-darken-3` : `red-text text-darken-4`}>{selection.overview}</p>
                  <p className={darkMode ? `red-text text-darken-3` : `black-text`}>
                  <small>Cast: {selection.cast.map(member => <span key={member}> {member} /</span> )}</small>
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