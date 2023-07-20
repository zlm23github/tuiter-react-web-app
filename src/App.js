import logo from './logo.svg';
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import {HashRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <HashRouter>
      <div className='container'>
        <Routes>
          {/* <Route path="/"         element={<Navigate to="/labs"/>}/> */}
          <Route path="/labs/*"   element={<Labs/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/tuiter/*" element={<Tuiter/>}/>
        </Routes>
      </div>
    </HashRouter>
    
  );

}
export default App;
