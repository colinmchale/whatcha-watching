import React, { useState } from "react";


const RenderResult = ({ selection, display}) => {


    if (display === 'movie') {
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
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="Cover-Poster"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{selection.title}</strong> <small>{selection.year}</small> <small>{selection.imdbRating}</small>
                    <br/>
                    {selection.overview}
                  </p>
                </div>
              </div>
            </article>
            </div>
            </div>
        </div>
        )
    } else if (display === 'series') {
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
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="Cover-Poster"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{selection.title}</strong> <small>{selection.year}</small> <small>{selection.imdbRating}</small>
                    <br/>
                    {selection.overview}
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