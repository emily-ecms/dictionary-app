import './App.css';
import SearchForm from "./SearchForm";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary App</h1>
        <SearchForm />
        <Footer />
      </header>
    </div>
  );
}

export default App;
