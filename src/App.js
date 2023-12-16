
import './App.css';
import Nav from './comp/nav'
import Codespace from'./pages/codespace';
function App() {
  return (
    <div className="App">
    <Nav />
    <div className="main">
     <Codespace />
    </div>
    </div>
  );
}

export default App;
