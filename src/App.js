import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
