import {useEffect} from "react";

// use useHistory to set up redirect to happen automatically when the form is submitted
import {useHistory} from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

import useHttp from "../hooks/use-http";
import {addQuote} from "../lib/api";

const AddAQuote = () => {
  const {sendRequest, status} = useHttp(addQuote);

  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.puch("/all-quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
    console.log(quoteData);
    history.push("/all-quotes");
  };
  return (
    <section>
      <h1>Add A Quote</h1>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={addQuoteHandler}
      />
    </section>
  );
};

export default AddAQuote;
