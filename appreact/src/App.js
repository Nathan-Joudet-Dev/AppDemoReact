import "./App.css";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Accueil from "./components/Accueil/accueil";
import Page2 from "./components/Page2/page2";
import Page3 from "./components/Page3/page3";
import PokedexList from "./components/page/PokedexList";

function App() {
  return (
    <>
      <ul>
        <Link to={"/Accueil"}>Accueil</Link>
        <Link to={"/Pokedex"}>Page Pokedex</Link>
        <Link to={"/page2"}>Page 2</Link>
        <Link to={"/page3"}>Page 3</Link>
      </ul>
      <Routes>
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/Pokedex" element={<PokedexList />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
      </Routes>
    </>
  );
}

export default App;
 