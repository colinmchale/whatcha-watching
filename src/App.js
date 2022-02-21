import "bulma/css/bulma.min.css";
import RenderResult from "./components/RenderResult";
import SearchArea from "./components/SerachArea";

function App() {


  return (
    <div>
      <div className="columns is-centered is-vcentered"> 
      <h1 className="title is-1 is">Whatcha Watching?</h1>
      </div>
      <SearchArea/>
      <RenderResult/>
    </div>
  );
}

export default App;
