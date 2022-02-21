import React, { useState } from "react";


const SearchArea = () => {

    return (
    <div className="columns is-mobile is-centered">
        <div className="column is-6 is-offset-3">
        <div className="field">
          <label className="label">Select Type:</label>
          <div className="control">
            <div className="select is-primary">
              <select>
                <option>Movie</option>
                <option>Series</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Select Genre:</label>
          <div className="control">
            <div className="select is-primary">
              <select>
                <option>Action</option>
                <option>Adventure</option>
                <option>Comedy</option>
                <option>Horror</option>
                <option>Mystery</option>
                <option>Romance</option>
                <option>Sci-Fi</option>
                <option>Thriller</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Keyword:</label>
          <div className="control">
            <input
              className="input is-primary"
              type="text"
              placeholder="Type Here"
            />
          </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
            <button class="button is-danger">Submit</button>
            </div>
        </div>
        </div>
    </div>
    )
}

export default SearchArea;