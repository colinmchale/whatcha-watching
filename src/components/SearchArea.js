import React, { useState } from "react";
import RenderResult from "./RenderResult";
import StreamChoice from "./StreamChoice";
import axios from "axios";

const SearchArea = ({ country, darkMode }) => {

  const [type, setType] = useState('');
  const [genre, setGenre] = useState('');
  const [streamService, setStreamService] = useState('');
  // const [keyword, setKeyword] = useState('');
  const [pages, setPages] = useState(1);
  const [selection, setSelection] = useState({});
  const [display, setDisplay] = useState('');

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
    // console.log(keyword);
    // if (!type) {
    //   setNameError('This field is required');
    // }
    // if (!genre) {
    //   setMessageError('This field is required');
    // }
    // if (!streamService) {
    //   setEmailError('This field is required');
    //   return; 
    // }
    setDisplay(type);
    firstSeach();
  }

  function firstSeach () {
    let options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/search/basic',
      params: {
        country: 'us',
        service: streamService,
        type: type,
        genre: genre,
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
      console.log(response.data.total_pages);
      let pageNumbers = response.data.total_pages;
      let randomPage = setRandomPage(pageNumbers);
      secondSearch(randomPage)
      console.log("this is randomPage " + randomPage);
    }).catch(function (error) {
      console.error(error);
    });

    console.log(pages)
  }

  function setRandomPage(pageNumbers) {
    let randomPage = (Math.floor(Math.random() * pageNumbers) + 1);
    setPages(randomPage)
    return randomPage;
  }

  function secondSearch(randomPage) {
    let randomMovie = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/search/basic',
      params: {
        country: 'us',
        service: streamService,
        type: type,
        genre: genre,
        page: randomPage,
        output_language: 'en',
        language: 'en'
      },
      headers: {
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
        'x-rapidapi-key': 'b80c64fe9emshef27d98ce1923b6p1f4017jsn1bb4451e68ed'
      }
    };

    axios.request(randomMovie).then(function (data) {
      let searchData = data.data
      console.log(searchData);
      console.log("this is length " + searchData.results.length);
      let randomResult = (Math.floor(Math.random() * searchData.results.length));
      console.log("this is random result " + randomResult);
      let randomSelection = searchData.results[randomResult];
      console.log(randomSelection);
      displaySearch(randomSelection);
    }).catch(function (error) {
      console.error(error);
    });
  };

  function displaySearch(randomSelection) {
    setSelection(randomSelection);
    // return randomSelection;
  }

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

  // const handleKeywordChange = (event) => {
  //   const { name, value } = event.target;
  //   // console.log(name);
  //   // console.log(value);
  //   let lowerKeyword = value.toLowerCase();
  //   console.log(lowerKeyword);
  //   setKeyword(lowerKeyword);
  // };

  return (
    <div>
      <div className="col s12 center-align"> 
      <h1 className={darkMode ? `title title-dark` : `title title-light`}>Whatcha Watching?</h1>
      </div>
      <div className="row">
        <div className="col s10 offset-s1 m4 offset-m4">
          <div className="input-field inputBox">
            <span>
              <label>Select Type:</label>
            </span>
            <div>
              <select className="browser-default" onChange={handleTypeChange}>
              <option value="" disabled selected>Choose your option</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
            </div>
          </div>

          {/* <div className="field">
            <label className="label">Select Type:</label>
            <div className="control">
              <div className="select is-primary">
                <select onChange={handleTypeChange}>
                  <option hidden>Choose</option>
                  <option>Movie</option>
                  <option>Series</option>
                </select>
              </div>
            </div>
          </div> */}

          <div className="input-field inputBox">
            <span>
              <label>Select Genre:</label>
            </span>
            <div>
              <select className="browser-default" onChange={handleGenreChange}>
              <option disabled selected>Choose your option</option>
              {/* <option value="movie">Movie</option>
              <option value="series">Series</option> */}
                  <option>Action</option>
                  <option>Adventure</option>
                  <option>Animation</option>
                  <option>Comedy</option>
                  <option>Crime</option>
                  <option>Drama</option>
                  <option>Fantasy</option>
                  <option>History</option>
                  <option>Horror</option>
                  <option>Mystery</option>
                  <option>Romance</option>
                  <option>Science Fiction</option>
                  <option>Thriller</option>
                  <option>Western</option>
            </select>
            </div>
          </div>

          {/* <div className="field">
            <label className="label">Select Genre:</label>
            <div className="control">
              <div className="select is-primary">
                <select onChange={handleGenreChange}>
                  <option hidden>Choose</option>
                  <option>Action</option>
                  <option>Adventure</option>
                  <option>Animation</option>
                  <option>Comedy</option>
                  <option>Crime</option>
                  <option>Drama</option>
                  <option>Fantasy</option>
                  <option>History</option>
                  <option>Horror</option>
                  <option>Mystery</option>
                  <option>Romance</option>
                  <option>Science Fiction</option>
                  <option>Thriller</option>
                  <option>Western</option>
                </select>
              </div>
            </div>
          </div> */}

          <div className="input-field inputBox">
            <span>
              <label>Select Streaming Service:</label>
            </span>
            <div>
              <select className="browser-default" onChange={handleStreamServiceChange}>
              <option value="" disabled selected>Choose your option</option>
              <StreamChoice
              country = {country}
              />
            </select>
            </div>
          </div>

          {/* <div className="field">
            <label className="label">Select Streaming Service:</label>
            <div className="control">
              <div className="select is-primary">
                <select onChange={handleStreamServiceChange}>
                  <option hidden>Choose</option> */}
                  {/* <option>Apple</option>
                  <option>Disney</option>
                  <option>HBO</option>
                  <option>Hulu</option>
                  <option>Mubi</option>
                  <option>Netflix</option>
                  <option>Paramount</option>
                  <option>Peacock</option>
                  <option>Prime</option>
                  <option>Showtime</option>
                  <option>Starz</option> */}
                  {/* <StreamChoice
                  country = {country}
                  />
                </select>
              </div>
            </div>
          </div> */}

          {/* <div className="field">
            <label className="label">Keyword (optional):</label>
            <div className="control">
              <input
                className="input is-primary"
                onChange={handleKeywordChange}
                type="text"
                placeholder="Type Here"
              />
            </div>
          </div> */}

          <div className="center">
          <button className="btn waves-effect waves-light" type="submit" name="action" id="submitBtn" onClick={handleFormSubmit}>Submit
            <i className="material-icons right">live_tv</i>
          </button>
          </div>

          {/* <div className="field is-grouped">
            <div className="control">
              <button className="button is-danger" onClick={handleFormSubmit}>
                Submit
              </button>
            </div>
          </div> */}
        </div>
      </div>

      <div>
        <RenderResult 
         selection={selection}
         display={display}
        />
      </div>
    </div>
  );
};

export default SearchArea;
