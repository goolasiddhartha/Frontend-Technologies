import logo from "./logo.svg";
import "./App.css";

function App() {
  function T1() {
    window.alert("Welcome to Bootstrap in react");
  }
  return (
    <div className="App">
      <h1 class="text-center text-white bg-danger">
        Welcome to bootstrap in React
      </h1>
      <hr></hr>
      <input
        type="submit"
        value="React_Button"
        class="btn btn-danger"
        onClick={T1}
      ></input>
      <hr></hr>
    </div>
  );
}

export default App;
