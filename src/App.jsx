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
    </div>
  );
}

export default App;
