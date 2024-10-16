import { Link } from "react-router-dom";
function App() {


  return (<>
    <h1>Click the below links:-</h1>

    <nav>
      <Link to={"/home"}>Home</Link>
      {" "}
      <Link to={"/about"}>About</Link>
      {" "}
      <Link to={"/Contact"}>Contact</Link>
    </nav>
    </>
  );
}

export default App;
