import {Route} from "react-router-dom";
import MainHeader from "./components/main-header/MainHeader";
import AddAQuote from "./pages/AddAQuote";
import AllQuotes from "./pages/AllQuotes";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/add-a-quote">
          <AddAQuote />
        </Route>
        <Route path="/all-quotes">
          <AllQuotes />
        </Route>
      </main>
    </div>
  );
}

export default App;
