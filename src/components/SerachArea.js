import React, { useState } from "react";
import RenderResult from "./RenderResult";
import axios from "axios";

const SearchArea = () => {

  const [type, setType] = useState('');
  const [genre, setGenre] = useState('');
  const [streamService, setStreamService] = useState('');
  const [keyword, setKeyword] = useState('');

  const genreLibrary = {
    "Biography": "1",
    "Film Noir": "2",
    "Game Show": "3",
    "Musical": "4",
    "Sport": "5",
    "Short": "6",
    "Adult": "7",
    "Adventure": "12",
    "Fantasy": "14",
    "Animation": "16",
    "Drama": "18",
    "Horror": "27",
    "Action": "28",
    "Comedy": "35",
    "History": "36",
    "Western": "37",
    "Thriller": "53",
    "Crime": "80",
    "Documentary": "99",
    "Science Fiction": "878",
    "Mystery": "9648",
    "Music": "10402",
    "Romance": "10749",
    "Family": "10751",
    "War": "10752",
    "News": "10763",
    "Reality": "10764",
    "Talk Show": "10767"
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log(type); 
    console.log(genre);
    console.log(streamService);
    console.log(keyword);

    let options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/search/basic',
      params: {
        country: 'us',
        service: streamService,
        type: type,
        genre: '18',
        page: '1',
        output_language: 'en',
        language: 'en'
      },
      headers: {
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
        'x-rapidapi-key': 'b80c64fe9emshef27d98ce1923b6p1f4017jsn1bb4451e68ed'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  };

  const handleTypeChange = (event) => {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    let lowerType = value.toLowerCase();
    console.log(lowerType);
    setType(lowerType);
  };

  const handleGenreChange = (event) => {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    let genre = genreLibrary[value];
    console.log(genre);
    setGenre(genre);
  };

  const handleStreamServiceChange = (event) => {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    let lowerStream = value.toLowerCase();
    console.log(lowerStream);
    setStreamService(lowerStream);
  };

  const handleKeywordChange = (event) => {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    let lowerKeyword = value.toLowerCase();
    console.log(lowerKeyword);
    setKeyword(lowerKeyword);
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
            <label className="label">Select Streaming Service:</label>
            <div className="control">
              <div className="select is-primary">
                <select onChange={handleStreamServiceChange}>
                  <option>Netflix</option>
                  <option>Hulu</option>
                  <option>Prime</option>
                  <option>HBO</option>
                  <option>ShowTime</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Keyword (optional):</label>
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
