import "./App.css";

//Importing Components
import Header from "./components/Header/HeaderLeft";
import Footer from "./components/Footer/Footer";
import { Component } from "react";

class App extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
