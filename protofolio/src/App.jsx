import "./App.css";
import About from "./component/About/About";
import Home from "./component/home/Home";
import MyProject from "./component/myProject/MyProject";
import Navbars from "./component/navbar/Navbar";
import Timline from "./component/timline/Timline";


function App() {
  return (
    <>
      <section className="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
       
      </section>

      <Navbars />
      <Home />
      <About />
      <Timline />
      <MyProject  />
    </>
  );
}

export default App;
