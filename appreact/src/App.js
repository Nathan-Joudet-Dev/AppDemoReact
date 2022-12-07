import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Link to={"/"}>Accueil</Link>
      <Link to={"/page1"}>Page 1</Link>
      <Link to={"/page2"}>Page 2</Link>
      <Link to={"/page3"}>Page 3</Link>
    </>
  );
}

export default App;
