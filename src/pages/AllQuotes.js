import {Route} from "react-router-dom";
import QuoteDetail from "./QuoteDetail";

const AllQuotes = () => {
  return (
    <section>
      <h1>All Quotes</h1>
      <Route path="/quote-detail/:quoteId">
        <QuoteDetail />
      </Route>
    </section>
  );
};

export default AllQuotes;
