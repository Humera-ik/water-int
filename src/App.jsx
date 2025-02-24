import "./App.css";
import { Glass } from "./components/image.jsx";
import { Form } from "./components/form.jsx";
import { RandomQuotes } from "./components/RandomQuotes.jsx";

function App() {
  return (
    <div className="App">
      <div className="Main">
        <Glass />
        <Form />
      </div>
      <RandomQuotes />
      <h5>Created By: Humera</h5>
    </div>
  );
}

export default App;
