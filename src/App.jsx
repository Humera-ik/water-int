import "./App.css";
import { ImageGif } from "./components/image.jsx";
import { Form } from "./components/form.jsx";
import { RandomQuotes } from "./components/RandomQuotes.jsx";

function App() {
  return (
    <div className="App">
      <h1>Water Intake Tracker</h1>
      <div className="Main">
        <ImageGif />
        <Form />
      </div>
      <RandomQuotes />
      <h5>Created By: Humera & Jhansi</h5>
    </div>
  );
}

export default App;
