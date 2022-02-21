import React, { useState } from "react";
import RenderResult from "./RenderResult";
import axios from "axios";

const SearchArea = () => {

  const [type, setType] = useState('Movie');
  const [genre, setGenre] = useState('');
  const [keyword, setKeyword] = useState('');
  const [streamService, setStreamService] = useState('');


  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log(type); 
    console.log(genre);
    console.log(streamService);
    console.log(keyword);

    // let options = {
    //   method: 'GET',
    //   url: 'https://streaming-availability.p.rapidapi.com/search/basic',
    //   params: {
    //     country: 'us',
    //     service: 'netflix',
    //     type: 'movie',
    //     genre: '18',
    //     page: '1',
    //     output_language: 'en',
    //     language: 'en'
    //   },
    //   headers: {
    //     'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
    //     'x-rapidapi-key': 'b80c64fe9emshef27d98ce1923b6p1f4017jsn1bb4451e68ed'
    //   }
    // };

    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });
  };

  // function getMoives(type, genre, streamService, keyword) {

  // }

  const handleTypeChange = (event) => {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    setType(value);
  };

  const handleGenreChange = (event) => {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    setGenre(value);
  };

  const handleKeywordChange = (event) => {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    setKeyword(value);
  };

  return (
    <div>
      <div className="columns is-centered is-vcentered"> 
      <h1 className="title is-1 is">Whatcha Watching?</h1>
      </div>
      <div className="columns is-mobile is-centered">
        <div className="column is-6 is-offset-3">
          <div className="field">
            <label className="label">Select Type:</label>
            <div className="control">
              <div className="select is-primary">
                <select onChange={handleTypeChange}>
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
                <select onChange={handleGenreChange}>
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
                onChange={handleKeywordChange}
                type="text"
                placeholder="Type Here"
              />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-danger" onClick={handleFormSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <RenderResult />
      </div>
    </div>
  );
};

export default SearchArea;
