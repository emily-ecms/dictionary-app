import './App.css';
import Dictionary from "./Dictionary";

import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>What word do you want to look up?</h1>
        
      </header>
      <Dictionary defaultWord="dictionary" />
        <Footer />
    </div>
  );
}

export default App;
