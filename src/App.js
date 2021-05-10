import "./App.css";
import Quote from "./Quote";
import data from "./quotesDB";
function App() {
  return (
    <div className="App">
      <Quote data={data} />
    </div>
  );
}

export default App;
