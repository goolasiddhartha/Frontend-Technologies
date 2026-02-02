import "./App.css";
import Customer from "./Customer.js";

function App() {
  return (
    <div>
      <br></br>
      <Customer Cid={"1001"} Cname="Jessica_1" Email="Jessica_1@gmail.com" />
      <br></br>
      <Customer Cid={"1002"} Cname="Jessica_2" Email="Jessica_2@gmail.com" />
    </div>
  );
}

export default App;
