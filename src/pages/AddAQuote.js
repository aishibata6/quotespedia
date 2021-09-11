// use useHistory to set up redirect to happen automatically when the form is submitted
import {useHistory} from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

const AddAQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.push("/all-quotes");
  };
  return (
    <section>
      <h1>Add A Quote</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </section>
  );
};

export default AddAQuote;
