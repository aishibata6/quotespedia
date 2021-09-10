import {Route, Switch, Redirect} from "react-router-dom";
//import MainHeader from "./components/main-header/MainHeader";
import AddAQuote from "./pages/AddAQuote";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="all-quotes" />
        </Route>
        <Route path="/all-quotes">
          <AllQuotes />
        </Route>
        <Route path="/quote-detail/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/add-a-quote">
          <AddAQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
