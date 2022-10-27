import "./App.css";
import { ImageGif } from "./components/image.js";
import { Form } from "./components/form.js";
import { RandomQuotes } from "./components/Random Quotes";

function App() {
  return (
    <div className="App">
      <h1>Water Intake Tracker</h1>
      <div className="Main">
        <ImageGif />
        <Form />
        <RandomQuotes />
      </div>
      <h5>Created By: Humera & Jhansi</h5>
    </div>
  );
}

export default App;
